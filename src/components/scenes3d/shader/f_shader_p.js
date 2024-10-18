export const fragment_shader = /*glsl*/ `
    varying vec2 vUv;
    uniform float uTime;
    void main() {

        vec2 uv = gl_PointCoord;

        float distanceToCenter = length(uv - 0.5);
        float alpha = 0.05 / distanceToCenter - 0.1;

        vec3 color = vec3(1.0 * (sin(uTime * 5.0) + 1.0) / 2.0, 0.5 * distanceToCenter, 0.9) ;

        gl_FragColor = vec4(color.xyz, alpha);
    }
`