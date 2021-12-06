import * as THREE from 'three';
import Experience from '../../../Experience';
// import vertexShader from './vertex.glsl';
// import fragmentShader from './fragment.glsl';
import Time from '../../../Utils/Time';

export default class Dust {
  constructor(radius, quantity) {
    this.radius = radius;
    this.quantity = quantity;

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = new Time();

    // Setup
    this.setGeometry();
    this.setMaterial();
    this.setPoints();

    // Tick event
    this.time.on('tick', () => {
      this.material.uniforms.uTime.value = this.time.elapsed;
    });
  }

  setGeometry() {
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.quantity * 3);
    this.scales = new Float32Array(this.quantity);

    for (let i = 0; i < this.quantity; i++) {
      const i3 = i * 3;

      // Position
      this.positions[i3] =
        Math.random() * this.radius * (Math.random() < 0.5 ? 1 : -1);
      this.positions[i3 + 1] =
        Math.random() * this.radius * (Math.random() < 0.5 ? 1 : -1);
      this.positions[i3 + 2] =
        Math.random() * this.radius * (Math.random() < 0.5 ? 1 : -1);

      // Scale
      this.scales[i] = Math.random();
    }

    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.positions, 3)
    );
    this.geometry.setAttribute(
      'aScale',
      new THREE.BufferAttribute(this.scales, 1)
    );
  }

  setMaterial() {
    this.material = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      vertexShader: `
        uniform float uSize;
        uniform float uTime;
        
        attribute float aScale;
        
        void main()
        {
          /**
            * Position
            */
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          float distanceToCenter = length(modelPosition.xyz);
          modelPosition.x +=  5.0 * sin(uTime * 0.0005 + distanceToCenter);
        
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;
        
          /**
            * Size
            */
          gl_PointSize = uSize * aScale;
          gl_PointSize *= (1.0 / - viewPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main()
        {
          // Light point
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 10.0);
        
          // // Final color
          // // vec3 color = mix(vec3(0.0), vColor, strength);
          gl_FragColor = vec4(vec3(strength), 1.0);
        }
      `,
      uniforms: {
        uSize: {
          value: 2500 * this.experience.renderer.instance.getPixelRatio(),
        },
        uTime: { value: 0 },
      },
    });
  }

  setPoints() {
    this.points = new THREE.Points(this.geometry, this.material);
    this.experience.scene.add(this.points);
  }
}
