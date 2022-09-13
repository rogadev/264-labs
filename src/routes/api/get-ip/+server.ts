export const GET = async ({ clientAddress }) => {
    let ip_address = clientAddress;
    return new Response(ip_address);
};