import { state } from './state.js';

const logo = document.getElementById('logo');
const logoWrapper = document.getElementById('logoWrapper');

export function updateVisuals() {
    const filters = [];
    filters.push(`hue-rotate(${state.hueShift}deg)`);
    filters.push(`saturate(${state.saturation}%)`);
    if (state.isGray) filters.push('grayscale(100%)');
    if (state.isBgrSwapped) filters.push(`url(#bgrFilter)`);
    if (state.isGbInverted) filters.push(`url(#gbInvertFilter)`);
    if (state.isRgInverted) filters.push(`url(#rgInvertFilter)`);
    if (state.isInverted) filters.push('invert(1)');
    
    logo.style.filter = filters.join(' ');
    
    let transform = '';
    if (state.isMirrored && state.isVerticallyMirrored) {
        transform += 'scale(-1, -1) ';
    } else if (state.isMirrored) {
        transform += 'scaleX(-1) ';
    } else if (state.isVerticallyMirrored) {
        transform += 'scaleY(-1) ';
    }
    
    if (state.isFisheye) transform += 'scale(1.7) ';
    if (state.isPinched) transform += 'scale(0.75) ';
    if (state.isPunched) transform += 'scale(1.1) ';
    
    logo.style.transform = transform.trim();
    logo.style.borderRadius = state.isFisheye ? '50%' : '0';

    logo.classList.toggle('wavy-horizontal', state.waveDirection === 'horizontal');
    logo.classList.toggle('wavy-vertical', state.waveDirection === 'vertical');
    logo.classList.toggle('swirling-ccw', state.isSwirling);

    if (logoWrapper) {
        logoWrapper.classList.toggle('hue-cycling', state.isHueCycling);
    }
}

export function setLogoImage(src) {
    logo.src = src;
}

export function clearVisuals() {
    logo.style.filter = '';
    logo.style.transform = '';
}