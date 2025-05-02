import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function initThreeScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xEBEBEB);

  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputEncoding = THREE.sRGBEncoding;

  const container = document.getElementById('three-container');
  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x808080, 5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(1, 2, 3);
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

  loader.load('/assets/foco.glb', (gltf) => {
    const foco = gltf.scene;
    foco.scale.set(2.7, 1.3, 2.7);

    foco.traverse((child) => {
      console.log(child.name);  // Imprimir el nombre de cada objeto cargado

      if (child.isMesh) {
        // Si encontramos el objeto "Sphere_3" (vidrio del foco), lo asignamos a bombillaMesh
        if (child.name === 'Sphere_3') {  // Ahora con el nombre correcto "Sphere_3"
          bombillaMesh = child;
          console.log('Bombilla encontrada:', bombillaMesh);

          // Guardamos el color original del material emisivo
          originalColor = bombillaMesh.material.emissive.getHex();
        }
      }
    });

    // Ajustamos la posición del foco para que esté centrado
    const box = new THREE.Box3().setFromObject(foco);
    const center = box.getCenter(new THREE.Vector3());
    foco.position.sub(center);

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
  
    // Cambia el color de fondo para dar sensación de iluminación
    scene.background = new THREE.Color(0x5BE6E2); // Azul muy oscuro
  
    // Cambia el vidrio del foco a un azul brillante
    if (bombillaMesh) {
      bombillaMesh.material.emissive.set(0x00d0ff); // Azul brillante
      bombillaMesh.material.emissiveIntensity = 2;
    }
  });
  
  container.addEventListener('mouseleave', () => {
    // Apaga la luz
    focoLight.intensity = 0;
    focoLight.color.set(0xfff1a8); // Color cálido (por si se reutiliza)
  
    // Vuelve el fondo a su color original
    scene.background = new THREE.Color(0xEBEBEB); // Fondo original
  
    // Bombilla apagada: un color claro tipo vidrio, sin parecer encendido
    if (bombillaMesh) {
      bombillaMesh.material.emissive.set(0xffffff); // Blanco apagado
      bombillaMesh.material.emissiveIntensity = 3; // Muy tenue o casi sin brillo
    }
  });
  

  function animate() {
    requestAnimationFrame(animate);
    focoGroup.rotation.y += 0.01; // Animación de rotación del foco
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
