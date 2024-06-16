precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform sampler2D mask;
uniform bool skip;

uniform float hue;
uniform float sat;
vec3 rgb2hsb(vec3 c){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
    vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsb2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {

  vec2 uv = vTexCoord;
  uv = 1.0 - uv;
  uv.x = 1.0 - uv.x;
  vec4 tex = texture2D(tex0, uv);
  vec4 mas = texture2D(mask, uv);
  vec3 hsb = rgb2hsb(tex.rgb);
  hsb.r += hue;
  hsb.g *= sat;
  vec3 rgb = hsb2rgb(hsb);
  if(!skip){
	gl_FragColor = vec4(rgb*mas.r, mas.r);
  }else{
	gl_FragColor = vec4(rgb, 1.0);
  }

  // try altering the saturation or brightness values!
}