const SpacedRepetition = {
    // Secuencia Fibonacci (en días)
    fibonacciDays: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],

    // Guardar frase como dominada
    markAsMastered(phraseId, lang) {
        const key = `mastered_${phraseId}_${lang}`;
        const today = new Date().toISOString().slice(0, 10);
        
        localStorage.setItem(key, JSON.stringify({
            phraseId,
            lang,
            masteredDate: today,
            nextReview: this.getNextReviewDate(0),
            reviewLevel: 0
        }));
    },

    // Obtener fecha del próximo repaso
    getNextReviewDate(reviewLevel) {
        const days = this.fibonacciDays[reviewLevel] || 55;
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toISOString().slice(0, 10);
    },

    // Obtener frases para repasar hoy
    getReviewsForToday() {
        const today = new Date().toISOString().slice(0, 10);
        const reviews = [];

        // Buscar en localStorage todas las frases dominadas
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('mastered_')) {
                const data = JSON.parse(localStorage.getItem(key));
                if (data.nextReview === today) {
                    reviews.push(data);
                }
            }
        }

        return reviews;
    },

    // Completar un repaso
    completeReview(phraseId, lang) {
        const key = `mastered_${phraseId}_${lang}`;
        const data = JSON.parse(localStorage.getItem(key));
        
        data.reviewLevel = (data.reviewLevel || 0) + 1;
        data.nextReview = this.getNextReviewDate(data.reviewLevel);
        
        localStorage.setItem(key, JSON.stringify(data));
    },

    // Mostrar notificación de repasos
    showReviewNotification() {
        const reviews = this.getReviewsForToday();
        if (reviews.length > 0) {
            console.log(`📚 Tienes ${reviews.length} frase(s) para repasar hoy`);
            // TODO: Mostrar como alert o modal en la UI
            return reviews;
        }
        return [];
    }
};
