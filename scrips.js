
try {

    fetch('https://api.instabuy.com.br/apiv3/layout?subdomain=organicos', {
        method: 'GET',

    }).then(res => res.json())
        .then(data => {

            const products = data.data.collection_items
            const banners = data.data.banners

            document.getElementById('banners').innerHTML =

                `${banners.map(banner => (

                    `<div key=${banner.id}>
                        <div class="banner_image">
                            <img src=${`https://assets.instabuy.com.br/ib.store.banner/bnr-${banner.image}`} alt=${banner.title}/>    
                        </div>
                </div>`
                )).join('')
                }`

            document.getElementById('products').innerHTML =

                `${products.map(product => (
                    product.items.map(item => (

                        `<div key=${item.id} class="card_product">
                        <div class="card_image">
                        <img src=${`https://assets.instabuy.com.br/ib.item.image.large/l-${item.images[0]}`} alt=${item.name}/>    
                    </div>
                    
                    <div class="card_body">
                        ${item.brand === undefined ? '' : `<p><strong>Marca: </strong>${item.brand}</p>`}
                        <p><strong>Nome: </strong>${item.name}</p>
                        <p><strong>Preço: </strong> R$ ${item.prices[0].price.toFixed(2)} ${item.unit_type === "UNI" ? 'Uni.' : 'Kg.'}</p>
                    </div>
                    
                    </div>`
                    )).join('')
                )).join('')
                }`
        })

} catch (error) {

    alert('Não foi possivel acessar o servidor, tente novamente mais tarde.')
}

