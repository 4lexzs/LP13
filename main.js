// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 8;

// Hauptlicht (von oben rechts)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Ambiente Licht (weiche Grundbeleuchtung)
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 1. Box mit MeshPhongMaterial (glänzend)
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xff0000,
    shininess: 100 
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.x = -3;
scene.add(box);

// 2. Kugel mit MeshStandardMaterial (realistisch)
const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x00ff00,
    metalness: 0.5,
    roughness: 0.3
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -1;
scene.add(sphere);

// 3. Zylinder metallic
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
const cylinderMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x0000ff,
    metalness: 0.8,
    roughness: 0.2
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.x = 1;
scene.add(cylinder);

// 4. Torus glänzend
const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
const torusMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xffff00,
    shininess: 150
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.x = 3;
scene.add(torus);

// Animation
function animate() {
    requestAnimationFrame(animate);
    
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
