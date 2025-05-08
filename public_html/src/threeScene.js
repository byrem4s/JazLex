import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function initThreeScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x504f4f); // Fondo más oscuro para resaltar el foco

  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true; // Activar sombras

  const container = document.getElementById('three-container');
  container.appendChild(renderer.domElement);

  // Luz ambiental (no muy fuerte para que no sature la escena)
  const ambientLight = new THREE.AmbientLight(0x808080, 1.5); 
  scene.add(ambientLight);

  // Luz direccional para proyectar sombras
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(2, 2, 2);
  directionalLight.castShadow = true; // Habilitar sombras en esta luz
  scene.add(directionalLight);

  // Luz del foco (inicialmente apagada)
  const focoLight = new THREE.PointLight(0xfff1a8, 0, 5);
  focoLight.position.set(0, 1.5, 0); // Posición del foco
  scene.add(focoLight);

  const loader = new GLTFLoader();
  const focoGroup = new THREE.Group();
  scene.add(focoGroup);

  let bombillaMesh = null; // Almacenamos el objeto de la bombilla (vidrio)
  let originalColor = null; // Almacenamos el color original del vidrio

  loader.load('/assets/focov1.1.glb', (gltf) => {
    const foco = gltf.scene;
    foco.scale.set(2.7, 1.3, 2.7);

    // Extraemos los textos antes de añadir el foco completo al grupo
    const textos = ['Text', 'Text002', 'Text003'];
    const textosExtraidos = [];

    foco.traverse((child) => {
      if (child.isMesh && textos.includes(child.name)) {
        textosExtraidos.push(child);
      }
    });

    // Quitamos los textos del foco y los agregamos directamente a la escena
    textosExtraidos.forEach((texto) => {
      foco.remove(texto);   // Lo sacamos del grupo del foco
      scene.add(texto);     // Lo añadimos a la escena global (no rota)
    });

    // Ajustamos la posición del foco para que esté centrado
    const box = new THREE.Box3().setFromObject(foco);
    const center = box.getCenter(new THREE.Vector3());
    foco.position.sub(center);

    // Mejoramos el material del foco (bombilla y cuerpo)
    foco.traverse((child) => {
      if (child.isMesh) {
        if (child.name === 'Sphere_1') {
          // Base de rosca (gris metálico oscuro)
          child.material.color.set(0x33393b); // Gris más oscuro para la base
          child.material.metalness = 0.7;
          child.material.roughness = 0.4;
        } else if (child.name === 'Sphere_2') {
          // Cuerpo del foco (blanco mate)
          child.material.color.set(0xf0f0f0); // Blanco mate
          child.material.metalness = 0.2;
          child.material.roughness = 0.6;
        } else if (child.name === 'Sphere_3') {
          // Bombilla (esfera de vidrio, material brillante)
          child.material.emissive.set(0xffffff); // Color brillante
          child.material.emissiveIntensity = 2; // Brillo alto
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
          bombillaMesh = child; // Guardamos la bombilla para cambiarla más tarde
        }
      }
    });

    focoGroup.add(foco);
    focoGroup.add(focoLight); // La luz se mueve con el foco

    camera.position.set(0, 1.5, 8);
    camera.lookAt(0, 0, 0);
  });

  // Añadimos los eventos de hover
  container.addEventListener('mouseenter', () => {
    // Enciende la luz y cambia su color a azul luminoso
    focoLight.intensity = 2.5;
    focoLight.color.set(0x00d0ff); // Azul brillante
    
    // Aclara el fondo ligeramente, como si la luz azul lo iluminara
    scene.background = new THREE.Color(0x3a4f58); // Fondo oscuro como base
    scene.background.lerp(new THREE.Color(0x3a4f58), 0.1); // Aclara con un toque de azul

    // Cambia la bombilla a un azul brillante
    if (bombillaMesh) {
      bombillaMesh.material.emissive.set(0x00d0ff); // Azul brillante
      bombillaMesh.material.emissiveIntensity = 2; // Intenso
    }
  });
  
  container.addEventListener('mouseleave', () => {
    // Apaga la luz
    focoLight.intensity = 0;
    focoLight.color.set(0xfff1a8); // Color cálido (por si se reutiliza)
  
    // Vuelve el fondo a su color original
    scene.background = new THREE.Color(0x504f4f); // Fondo oscuro original
  
    // Bombilla apagada: un color claro tipo vidrio, sin parecer encendido
    if (bombillaMesh) {
      bombillaMesh.material.emissive.set(0xffffff); // Blanco apagado
      bombillaMesh.material.emissiveIntensity = 3; // Muy tenue o casi sin brillo
    }
  });

  function animate() {
    requestAnimationFrame(animate);
    focoGroup.rotation.y += 0.01; // Animación de rotación del foco
    
    // Mover ligeramente la luz direccional para agregar dinamismo a las sombras
    directionalLight.position.x = Math.sin(focoGroup.rotation.y) * 2;
    directionalLight.position.z = Math.cos(focoGroup.rotation.y) * 2;
    
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
