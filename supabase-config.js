// supabase-config.js - ArdyMarket
const url = 'https://llrcyeikbaqxgakxcbcv.supabase.co'; 
const key = 'sb_publishable_L3oTotJ68Pbsp46lwqGalg_PeqQEipg';

// Inicialización usando window para evitar conflitos
window.supabase = supabase.createClient(url, key);

// Teste rápido de conexión
async function testConnection() {
    try {
        const { data, error } = await window.supabase.from('profiles').select('count', { count: 'exact', head: true });
        console.log("✅ Conexión establecida con Hardyglot!");
    } catch (err) {
        console.error("❌ Error técnico:", err.message);
    }
}

testConnection();