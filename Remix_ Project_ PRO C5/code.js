var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png","frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":1,"version":"wr8X_9pVbl04NA0iw3MR0l5p6_3yILka","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"_W3cDEt8rKXSbz21.dN9N42Vpo8EKWpx","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png","frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"jPKq1Use4z8najcWpsfdoyAcLnv_n6Bo","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png","frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"HmsSpkk9UTcFBQ.pCB.pzza99u3AMzBi","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png","frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"te5EfBqdRVGI4qm7CTDMY6SCpszoHg2E","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"onion","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"3OEuD4GOrxeSL3d_JxabmGe0kZjnkb14","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


  var brinjal1 = createSprite(370,200,20,20);
var brinjal2 = createSprite(300, 200,20,20);
var brinjal3 = createSprite(220, 200,20,20);
var brinjal4 = createSprite(150, 200,20,20);
var brinjal5= createSprite(70, 200,20,20);

var capsicum1 = createSprite(370, 270,20,20);
var capsicum2 = createSprite(220, 270,20,20);
var capsicum3 = createSprite(300, 270,20,20);
var capsicum4 = createSprite(150, 270,20,20);
var capsicum5 = createSprite(70, 270,20,20);

var onion1 = createSprite(370, 140,20,20);
var onion2 = createSprite(220, 140,20,20);
var onion3 = createSprite(300, 140,20,20);
var onion4 = createSprite(150, 140,20,20);
var onion5 = createSprite(70, 140,20,20);

var carrot1 = createSprite(370, 80,20,20);
var carrot2= createSprite(220, 80,20,20);
var carrot3 = createSprite(300, 80,20,20);
var carrot4 = createSprite(150, 80,20,20);
var carrot5 = createSprite(70, 80,20,20);

var tomato1 = createSprite(370,350,20,20);
var tomato2 = createSprite(220, 350,20,20);
var tomato3 = createSprite(300, 350,20,20);
var tomato4 = createSprite(150, 350,20,20);
var tomato5 = createSprite(70, 350,20,20);



function draw() { 
 background("brown");
  drawSprites()
   brinjal1.setAnimation("brinjal");
brinjal2.setAnimation("brinjal");
brinjal3.setAnimation("brinjal");
brinjal4.setAnimation("brinjal");

brinjal5.setAnimation("brinjal");
  

  
}
capsicum1.setAnimation("capcisum");
capsicum2.setAnimation("capcisum");
capsicum3.setAnimation("capcisum");
capsicum4.setAnimation("capcisum");
capsicum5.setAnimation("capcisum");

onion1.setAnimation("onion");
onion2.setAnimation("onion");
onion3.setAnimation("onion");
onion4.setAnimation("onion");
onion5.setAnimation("onion");

carrot1.setAnimation("carrot");
carrot2.setAnimation("carrot");
carrot3.setAnimation("carrot");
carrot4.setAnimation("carrot");
carrot5.setAnimation("carrot");

tomato1.setAnimation("tomato");
tomato2.setAnimation("tomato");
tomato3.setAnimation("tomato");
tomato4.setAnimation("tomato");
tomato5.setAnimation("tomato");






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
