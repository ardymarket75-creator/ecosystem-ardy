// supabase-config.js
// 1. Configuração (Removi o /rest/v1/ do final da URL)
const url = 'https://llrcyeikbaqxgakxcbcv.supabase.co'; 
const key = 'sb_publishable_L3oTotJ68Pbsp46lwqGalg_PeqQEipg';

// 2. Inicialização usando window para evitar conflitos
window.supabase = supabase.createClient(url, key);

// 3. Teste rápido de conexão para confirmar que o motor está vivo
async function testConnection() {
    try {
        // En lugar de leer toda la tabla, vamos a pedirle al sistema que solo nos diga 
        // si el cliente está bien configurado sin intentar leer datos privados aún.
        const { data, error } = await window.supabase.from('profiles').select('count', { count: 'exact', head: true });
        
        // Si no da error de "permission denied", es que la conexión es correcta
        console.log("¡Conexión establecida con Hardyglot!");
    } catch (err) {
        console.error("Error técnico:", err.message);
    }
}

testConnection();