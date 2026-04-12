import { state, resetState } from './state.js';
import { initAudio, startMetronomeLoop } from './audioEngine.js';
import { updateVisuals, setLogoImage, clearVisuals } from './visualEngine.js';
import { effects } from './effectLibrary.js';

// removed state variables: audioCtx, hueShift, saturation, semitoneShift, metronomeStarted, etc.

const logo = document.getElementById('logo');
const luigBtn = document.getElementById('luigBtn');
const mariBtn = document.getElementById('mariBtn');
const gMajorBtn = document.getElementById('gMajorBtn');
const pikaBtn = document.getElementById('pikaBtn');
const gMajor5Btn = document.getElementById('gMajor5Btn');
const gMajor4Btn = document.getElementById('gMajor4Btn');
const gMajor2Btn = document.getElementById('gMajor2Btn');
const gMajorNewBtn = document.getElementById('gMajorNewBtn');
const gMajor7Btn = document.getElementById('gMajor7Btn');
const originalGMajorBtn = document.getElementById('originalGMajorBtn');
const gMajor1Btn = document.getElementById('gMajor1Btn');
const gMajor11Btn = document.getElementById('gMajor11Btn');
const fakeGBtn = document.getElementById('fakeGBtn');
const kMajorBtn = document.getElementById('kMajorBtn');
const congaBtn = document.getElementById('congaBtn');
const scaryrollBtn = document.getElementById('scaryrollBtn');
const mikesonBtn = document.getElementById('mikesonBtn');
const killedXBtn = document.getElementById('killedXBtn');
const custom3Btn = document.getElementById('custom3Btn');
const cryingXBtn = document.getElementById('cryingXBtn');
const confusionBtn = document.getElementById('confusionBtn');
const lowVoiceBtn = document.getElementById('lowVoiceBtn');
const sadBtn = document.getElementById('sadBtn');
const happyBtn = document.getElementById('happyBtn');
const gMajor90Btn = document.getElementById('gMajor90Btn');
const kartBtn = document.getElementById('kartBtn');
const notScaryBtn = document.getElementById('notScaryBtn');
const mediaBottleBtn = document.getElementById('mediaBottleBtn');
const gMajorTrillBtn = document.getElementById('gMajorTrillBtn');
const aMajorBtn = document.getElementById('aMajorBtn');
const hueCycleBtn = document.getElementById('hueCycleBtn');
const rgbaBgraBtn = document.getElementById('rgbaBgraBtn');
const gMajor808Btn = document.getElementById('gMajor808Btn');
const resetBtn = document.getElementById('resetBtn');
const buttonGroup = document.querySelector('.button-group');

const moveModal = document.getElementById('moveModal');
const goNowBtn = document.getElementById('goNowBtn');
const continueBtn = document.getElementById('continueBtn');

goNowBtn.addEventListener('click', () => {
    window.location.href = "https://hpinfinikjulio-source.github.io/nintendo-corrupter";
});

continueBtn.addEventListener('click', () => {
    moveModal.style.display = 'none';
});

// removed logic: initAudio(), playMetronomeTick(), startMetronomeLoop(), updateVisuals(), handleBaseAction()
// removed effect listeners logic (luig, mari, gmajor, pika, etc.)

luigBtn.addEventListener('click', effects.luig);
mariBtn.addEventListener('click', effects.mari);
gMajorBtn.addEventListener('click', effects.gMajor);
gMajor1Btn.addEventListener('click', effects.gMajor1);
pikaBtn.addEventListener('click', effects.pika);
gMajor5Btn.addEventListener('click', effects.gMajor5);
gMajor4Btn.addEventListener('click', effects.gMajor4);
gMajor2Btn.addEventListener('click', effects.gMajor2);
gMajorNewBtn.addEventListener('click', effects.gMajorNew);
gMajor7Btn.addEventListener('click', effects.gMajor7);
originalGMajorBtn.addEventListener('click', effects.originalGMajor);
gMajor11Btn.addEventListener('click', effects.gMajor11);
fakeGBtn.addEventListener('click', effects.fakeG);
kMajorBtn.addEventListener('click', effects.kMajor);
congaBtn.addEventListener('click', effects.conga);
scaryrollBtn.addEventListener('click', effects.scaryroll);
mikesonBtn.addEventListener('click', effects.mikeson);
killedXBtn.addEventListener('click', effects.killedX);
custom3Btn.addEventListener('click', effects.custom3);
cryingXBtn.addEventListener('click', effects.cryingX);
confusionBtn.addEventListener('click', effects.confusion);
lowVoiceBtn.addEventListener('click', effects.lowVoice);
sadBtn.addEventListener('click', effects.sad);
happyBtn.addEventListener('click', effects.happy);
gMajor90Btn.addEventListener('click', effects.gMajor90);
kartBtn.addEventListener('click', effects.kartDarVarer);
notScaryBtn.addEventListener('click', effects.notScary);
mediaBottleBtn.addEventListener('click', effects.mediaBottle);
gMajorTrillBtn.addEventListener('click', effects.gMajorTrillicillion);
aMajorBtn.addEventListener('click', effects.aMajor);
hueCycleBtn.addEventListener('click', effects.hueCycle);
rgbaBgraBtn.addEventListener('click', effects.rgbaToBgra);
gMajor808Btn.addEventListener('click', effects.gMajor808);

resetBtn.addEventListener('click', () => {
    resetState();
    setLogoImage('./Klasky_Csupo_1998_Robot_Logo.webp');
    clearVisuals();
    initAudio();
    updateVisuals();
});

// Keyboard navigation for effects bar on desktop
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        buttonGroup.scrollBy({ left: 200, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
        buttonGroup.scrollBy({ left: -200, behavior: 'smooth' });
    }
});
