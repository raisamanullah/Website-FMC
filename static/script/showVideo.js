const content = document.querySelector(".right");

function showVideo(video) {
    if (video === 'konsepIPO') {
        content.innerHTML = `
            <lite-youtube videoid="fpLwzsZPx5A" playlabel="Konsep IPO"></lite-youtube>
            <p class="learn-title">Konsep IPO</p>
        `;
    } else if (video === 'pasarModal') {
        content.innerHTML = `
            <lite-youtube videoid="4sP-PC8O6SI" playlabel="Pasar Modal"></lite-youtube>
            <p class="learn-title">Pasar Primer, Sekunder, dan Tersier</p>
        `;
    } else if (video === 'klasifikasi') {
        content.innerHTML = `
            <lite-youtube videoid="VP6VbXMDRWU" playlabel="Klasifikasi Perusahaan"></lite-youtube>
            <p class="learn-title">4 Tingkat Klasifikasi Perusahaan</p>
        `;
    } else if (video === 'perusahaanTercatat') {
        content.innerHTML = `
            <lite-youtube videoid="nyrNeW9HJTQ" playlabel="Sektor dan Industri Perusahaan Tercatat di BEI"></lite-youtube>
            <p class="learn-title">Sektor dan Industri Perusahaan Tercatat di BEI</p>
        `;
    } else if (video === 'keuntunganResiko') {
        content.innerHTML = `
            <lite-youtube videoid="tRyd4com40U" playlabel="Keuntungan dan Resiko dalam Saham"></lite-youtube>
            <p class="learn-title">Keuntungan dan Resiko dalam Saham</p>
        `;
    } else if (video === 'istilah') {
        content.innerHTML = `
            <lite-youtube videoid="DPrsKsivvJc" playlabel="Istilah Istilah pada Dividen"></lite-youtube>
            <p class="learn-title">Istilah Istilah pada Dividen</p>
        `;
    } else if (video === 'dividendTrap') {
        content.innerHTML = `
            <lite-youtube videoid="89O-3hW8e8o" playlabel="Dividend Trap"></lite-youtube>
            <p class="learn-title">Dividend Trap</p>
        `;
    } else if (video === 'obligasi') {
        content.innerHTML = `
            <lite-youtube videoid="OjqmDv4wc-8" playlabel="Pengertian Obligasi"></lite-youtube>
            <p class="learn-title">Pengertian Obligasi</p>
        `;
    } else if (video === 'jenisObligasi') {
        content.innerHTML = `
            <lite-youtube videoid="NO5mPjiMC7U" playlabel="Jenis Obligasi"></lite-youtube>
            <p class="learn-title">Jenis Obligasi</p>
        `;
    } else if (video === 'reksadana') {
        content.innerHTML =`
            <lite-youtube videoid="1rRdVxO4_Uk" playlabel="Fungsi Saham"></lite-youtube>
            <p class="learn-title">Jenis Reksadana</p>
        `;
    } else if (video === 'assetManagement') {
        content.innerHTML = `
            <lite-youtube videoid="Q1Tg0Nb00hQ" playlabel="Asset Management"></lite-youtube>
            <p class="learn-title">Asset Management</p>
        `;
    } else if (video === 'orangKayaBeliSaham') {
        content.innerHTML = `
            <lite-youtube videoid="HJXcPLgQBoE" playlabel="Orang Kaya = Beli Saham"></lite-youtube>
            <p class="learn-title">Miskonsepsi orang kaya = beli saham</p>
        `;
    } else if (video === 'profitability') {
        content.innerHTML = `
            <lite-youtube videoid="G2xMmti15rA" playlabel="Profitability Ratio"></lite-youtube>
            <p class="learn-title">Profitability Ratio</p>
        `;
    } else if (video === 'liquidity') {
        content.innerHTML = `
            <lite-youtube videoid="J2YKGQIiqC0" playlabel="Liquidity Ratio"></lite-youtube>
            <p class="learn-title">Liquidity Ratio</p>
        `;
    }
}