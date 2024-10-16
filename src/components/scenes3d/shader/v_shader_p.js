export const vertext_shader = /*glsl*/ `
    varying vec2 vUv;
    uniform vec2 uResolution; 
    uniform float uSize;
    uniform float uTime;
    attribute vec3 positionTarget;

    void main() {
        vUv = uv;
        float progress = 0.1;
        vec3 mixPos = mix(position, positionTarget, (sin(uTime * 5.0) + 1.0) / 2.0 );
        vec4 modelPosition = modelMatrix * vec4(mixPos, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        gl_PointSize = uSize * uResolution.y;
        gl_PointSize *= (1.0 / - viewPosition.z);

    }
`;