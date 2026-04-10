export const state = {
    hueShift: 0,
    saturation: 100,
    semitoneShift: 0,
    metronomeStarted: false,
    isBgrSwapped: false,
    isGbInverted: false,
    isRgInverted: false,
    isInverted: false,
    isMirrored: false,
    isGray: false,
    isFisheye: false,
    waveDirection: null,
    isVerticallyMirrored: false,
    isSwirling: false,
    isReversed: false,
    isPinched: false,
    isPunched: false,
    isHueCycling: false,
    speed: 1.0,
    pitchOffsets: [0],
};

export function resetState() {
    state.hueShift = 0;
    state.saturation = 100;
    state.semitoneShift = 0;
    state.pitchOffsets = [0];
    state.isBgrSwapped = false;
    state.isGbInverted = false;
    state.isRgInverted = false;
    state.isInverted = false;
    state.isMirrored = false;
    state.isGray = false;
    state.isFisheye = false;
    state.waveDirection = null;
    state.isVerticallyMirrored = false;
    state.isSwirling = false;
    state.isReversed = false;
    state.isPinched = false;
    state.isPunched = false;
    state.isHueCycling = false;
    state.speed = 1.0;
}