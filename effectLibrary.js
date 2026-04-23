import { state } from './state.js';
import { updateVisuals, setLogoImage, clearVisuals } from './visualEngine.js';
import { initAudio, startMetronomeLoop } from './audioEngine.js';

function prepareEffect() {
    initAudio();
    startMetronomeLoop();
}

export const effects = {
    luig: () => {
        prepareEffect();
        state.hueShift -= 50;
        state.semitoneShift -= 1;
        updateVisuals();
    },
    mari: () => {
        prepareEffect();
        state.hueShift += 50;
        state.semitoneShift += 1;
        updateVisuals();
    },
    gMajor: () => {
        prepareEffect();
        state.isBgrSwapped = true;
        state.hueShift += 180;
        if (state.pitchOffsets.length < 256) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 4, p + 5]);
        }
        updateVisuals();
    },
    gMajor1: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isInverted = true;
        if (state.pitchOffsets.length < 1024) {
            state.pitchOffsets = state.pitchOffsets.map(p => p + 8);
        }
        updateVisuals();
    },
    pika: () => {
        prepareEffect();
        state.hueShift += 10;
        state.saturation += 30;
        if (state.pitchOffsets.length < 243) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 7, p, p - 7]);
        }
        updateVisuals();
    },
    gMajor5: () => {
        prepareEffect();
        state.isGbInverted = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 0, p + 4]);
        }
        updateVisuals();
    },
    gMajor4: () => {
        prepareEffect();
        setLogoImage('./Jamie_Shaffer27s_G-Major_4.png');
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 0, p + 5]);
        }
        updateVisuals();
    },
    gMajor2: () => {
        prepareEffect();
        state.isRgInverted = true;
        if (state.pitchOffsets.length < 243) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 0, p + 4, p - 5]);
        }
        updateVisuals();
    },
    gMajorNew: () => {
        prepareEffect();
        state.isInverted = true;
        if (state.pitchOffsets.length < 1024) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 12, p - 5, p + 0, p + 4, p + 7, p + 12]);
        }
        updateVisuals();
    },
    gMajor7: () => {
        prepareEffect();
        state.isInverted = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets
                .flatMap(p => [p + 0, p + 3])
                .flatMap(p => [p + 0, p + 3]);
        }
        updateVisuals();
    },
    originalGMajor: () => {
        prepareEffect();
        state.isInverted = false;
        state.isMirrored = false;
        state.isGray = false;
        if (state.pitchOffsets.length < 1024) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 12, p - 5, p + 0, p + 4, p + 7, p + 12]);
        }
        updateVisuals();
    },
    gMajor11: () => {
        prepareEffect();
        state.isMirrored = true;
        state.isGray = true;
        state.isInverted = true;
        if (state.pitchOffsets.length < 1024) {
            state.pitchOffsets = [...state.pitchOffsets, ...state.pitchOffsets.map(p => p + 14)];
        }
        updateVisuals();
    },
    fakeG: () => {
        prepareEffect();
        state.isInverted = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 12, p + 0, p + 12]);
        }
        updateVisuals();
    },
    kMajor: () => {
        prepareEffect();
        state.hueShift -= 30;
        state.saturation = Math.max(20, state.saturation - 20);
        if (state.pitchOffsets.length < 256) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 1, p - 1, p + 6, p - 6]);
        }
        state.semitoneShift -= 1;
        updateVisuals();
    },
    conga: () => {
        prepareEffect();
        state.hueShift += 25;
        state.saturation += 15;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 12, p + 0, p + 12]);
        }
        state.semitoneShift += 1;
        updateVisuals();
    },
    scaryroll: () => {
        prepareEffect();
        state.isInverted = true;
        state.isMirrored = false;
        state.isGray = false;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 9, p - 3, p + 3, p + 9]);
        }
        updateVisuals();
    },
    mikeson: () => {
        prepareEffect();
        state.hueShift += 50;
        state.isMirrored = true;
        if (state.pitchOffsets.length < 256) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 5, p + 7]).flatMap(p => [p - 5, p + 7]);
        }
        updateVisuals();
    },
    killedX: () => {
        prepareEffect();
        state.hueShift -= 130;
        state.isFisheye = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.map(p => p - 8);
        }
        updateVisuals();
    },
    custom3: () => {
        prepareEffect();
        state.hueShift += 165;
        state.isMirrored = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 0, p + 0.1]).flatMap(p => [p + 0, p + 0.1]);
        }
        updateVisuals();
    },
    cryingX: () => {
        prepareEffect();
        state.hueShift -= 120;
        state.isInverted = true;
        state.waveDirection = 'vertical';
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 0, p - 5]).flatMap(p => [p + 0, p - 5]);
        }
        updateVisuals();
    },
    confusion: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isMirrored = true;
        state.isInverted = true;
        state.isReversed = true;
        updateVisuals();
    },
    lowVoice: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isMirrored = true;
        state.speed = 0.75;
        state.semitoneShift -= 5;
        updateVisuals();
    },
    sad: () => {
        prepareEffect();
        state.hueShift -= 120;
        state.isInverted = true;
        state.waveDirection = 'vertical';
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 0, p - 7]).flatMap(p => [p + 0, p - 7]);
        }
        updateVisuals();
    },
    happy: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isInverted = true;
        state.waveDirection = 'vertical';
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p + 4, p + 12]).flatMap(p => [p + 4, p + 12]);
        }
        updateVisuals();
    },
    gMajor90: () => {
        prepareEffect();
        state.hueShift -= 50;
        state.saturation += 100;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 1, p + 1]).flatMap(p => [p - 1, p + 1]);
        }
        updateVisuals();
    },
    kartDarVarer: () => {
        prepareEffect();
        state.isBgrSwapped = true;
        state.hueShift -= 113;
        state.isMirrored = true;
        state.isVerticallyMirrored = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 4, p + 4]).flatMap(p => [p - 4, p + 4]);
        }
        updateVisuals();
    },
    notScary: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isMirrored = true;
        state.waveDirection = 'horizontal';
        state.semitoneShift -= 2.5;
        updateVisuals();
    },
    mediaBottle: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isInverted = true;
        state.isPinched = true;
        state.isPunched = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets
                .flatMap(p => [p - 3, p + 2])
                .flatMap(p => [p - 3, p + 2]);
        }
        updateVisuals();
    },
    gMajorTrillicillion: () => {
        prepareEffect();
        state.hueShift += 220;
        state.isInverted = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets
                .flatMap(p => [p + 24, p - 24])
                .flatMap(p => [p + 24, p - 24]);
        }
        updateVisuals();
    },
    aMajor: () => {
        prepareEffect();
        state.isInverted = true;
        state.hueShift += 110;
        state.isMirrored = true;
        state.isSwirling = true;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets
                .flatMap(p => [p + 5, p + 10])
                .flatMap(p => [p + 5, p + 10]);
        }
        updateVisuals();
    },
    hueCycle: () => {
        prepareEffect();
        state.isHueCycling = true;
        updateVisuals();
    },
    rgbaToBgra: () => {
        prepareEffect();
        state.isBgrSwapped = true;
        updateVisuals();
    },
    gMajor808: () => {
        prepareEffect();
        state.isSwirling = true;
        state.isPinched = true;
        state.hueShift += 180;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets
                .flatMap(p => [p + 1, p + 6])
                .flatMap(p => [p + 1, p + 6]);
        }
        updateVisuals();
    }, 
    gMajor74: () => {
        prepareEffect();
        state.hueShift += 180;
        state.isInverted = true;
        state.isPunched = true;
        if (state.pitchOffsets.length < 1024) {
            state.pitchOffsets = state.pitchOffsets.flatMap(p => [p - 10, p + 9, p + 14]);
        }
        updateVisuals();
    },
    gMinor305: () => {
        prepareEffect();
        state.hueShift += 120;
        if (state.pitchOffsets.length < 512) {
            state.pitchOffsets = state.pitchOffsets
                .flatMap(p => [p + 7, p - 12])
                .flatMap(p => [p + 7, p - 12]);
        }
        updateVisuals();
    }
};