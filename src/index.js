
import * as THREE from 'three';
import THREE_PLUGIN from 'three-es6-plugin';

console.log('THREE_PLUGIN:', THREE_PLUGIN);

const canvas = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera( 75, canvas.width/canvas.height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const scene = new THREE.Scene();
scene.add( cube );


const controls = new THREE_PLUGIN.OrbitControls(camera, renderer.domElement);
const objl = new THREE_PLUGIN.OBJLoader();
const mtll = new THREE_PLUGIN.MTLLoader();
const ddsl = new THREE_PLUGIN.DDSLoader();
// ...

camera.position.z = 2;
let render = () => {
    const t = performance.now() / 1000.;
    cube.rotation.x = Math.PI/2 * t;
    renderer.render(scene, camera);
};
let animate = () => {
    requestAnimationFrame(animate);
    render();
};
animate();
