import { state } from './state.js';

const BASE_FREQ_C4 = 261.63;
let audioCtx = null;

export function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

export function playMetronomeTick() {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const duration = (0.15 + (Math.min(state.pitchOffsets.length, 250) / 100)) / state.speed;

    state.pitchOffsets.forEach(offset => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const totalSemitones = state.semitoneShift + offset;
        const currentFreq = BASE_FREQ_C4 * Math.pow(2, totalSemitones / 12);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(currentFreq, now);
        
        const volume = 0.3 / Math.sqrt(state.pitchOffsets.length);
        const startVol = state.isReversed ? 0.001 : volume;
        const endVol = state.isReversed ? volume : 0.001;
        
        gain.gain.setValueAtTime(startVol, now);
        gain.gain.exponentialRampToValueAtTime(endVol, now + duration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now);
        osc.stop(now + duration);
    });
}

export function startMetronomeLoop() {
    if (state.metronomeStarted) return;
    state.metronomeStarted = true;
    
    function loop() {
        playMetronomeTick();
        setTimeout(loop, 500 / state.speed);
    }
    loop();
}