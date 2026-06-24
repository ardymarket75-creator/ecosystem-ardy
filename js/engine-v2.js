const AudioEngine = {
    sessionConfig: {
        reps: { en: 5, es: 1, he: 5 },
        silenceGap: { en: 1.3, es: 0.0, he: 1.3 }
    },
    isPlaying: false,
    stepIndex: 0,
    repIndex: 0,
    pausedTime: 0,

    async playSequence(phraseData, audioObjects, onStepComplete) {
        this.isPlaying = true;
        this.pausedTime = 0;

        const sequence = [
            { l: 'es', t: phraseData.idiomas_soporte[0].sincronizacion_audio },
            { l: 'en', t: phraseData.idioma_objetivo.sincronizacion_audio },
            { l: 'es', t: phraseData.idiomas_soporte[0].sincronizacion_audio },
            { l: 'he', t: phraseData.idiomas_soporte[1].sincronizacion_audio }
        ];

        for (; this.stepIndex < sequence.length; this.stepIndex++) {
            let step = sequence[this.stepIndex];
            let totalReps = this.sessionConfig.reps[step.l] || 1;

            for (; this.repIndex < totalReps; this.repIndex++) {
                if (!this.isPlaying) {
                    this.pausedTime = audioObjects[step.l].currentTime;
                    return;
                }
                
                await this.playSegment(audioObjects[step.l], step.t);
                if (onStepComplete) onStepComplete(step.l, this.repIndex === totalReps - 1);
                
                await new Promise(r => setTimeout(r, this.sessionConfig.silenceGap[step.l] * 1000));
            }
            this.repIndex = 0;
        }

        this.stepIndex = 0;
        this.pausedTime = 0;
        this.isPlaying = false;
        window.dispatchEvent(new Event('fraseCompletada'));
    },

    playSegment(audio, [start, end]) {
        return new Promise(resolve => {
            audio.currentTime = start;
            audio.play();
            setTimeout(() => {
                audio.pause();
                resolve();
            }, (end - start) * 1000);
        });
    },

    pause() {
        this.isPlaying = false;
        Object.values(arguments[0] || {}).forEach(a => {
            if (a) a.pause();
        });
    },

    reset() {
        this.isPlaying = false;
        this.stepIndex = 0;
        this.repIndex = 0;
        this.pausedTime = 0;
    }
};