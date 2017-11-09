var contentfulClient = contentful.createClient({
    accessToken: 'f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee',
    space: 'xq9fh8s1o76v'
})

var PRODUCT_CONTENT_TYPE_ID = '2PqfXUJwE8qSYKuM0U6w8M'

var container = document.getElementById('content')

contentfulClient.getEntries({
    content_type: PRODUCT_CONTENT_TYPE_ID
})
.then(function(entries) {
    container.innerHTML = renderProducts(entries.items)
})

function renderProducts(products) {
    return '<h1>Products hello</h1>' +
        '<div class="products">' +
        products.map(renderSingleProduct).join('\n') +
        '</div>'
}

function renderSingleProduct(product) {
    var fields = product.fields
    console.log(fields)
    return '<div class="product-in-list">' +
        '<div class="product-image">' +
        renderImage(fields.image[0], fields.slug) +
        '</div>' +
        '<div class="product-details">' +
        renderProductDetails(fields) +
        '</div>' +
        '</div>'
}

function renderProductDetails(fields) {
    return renderProductHeader(fields) +
        '<p class="product-categories">' +
        fields.categories.map(function(category) {
            return category.fields.title
        }).join(', ') +
        '</p>' +
        '<p>' + marked(fields.productDescription) + '</p>' +
        '<p>' + fields.price + ' &euro;</p>' +
        '<p class="product-tags"><span>Tags:</span> ' + fields.tags.join(', ') + '</p>'
}

function renderProductHeader(fields) {
    return '<div class="product-header">' +
        '<h2>' +
        '<a href="product/' + fields.slug + '">' +
        fields.productName +
        '</a>' +
        '</h2>' +
        ' by ' +
        '<a href="brand/' + fields.brand.sys.id + '">' + fields.brand.fields.companyName + '</a>' +
        '</div>'
}

function renderImage(image, slug) {
    if (image && image.fields.file) {
        return '<a href="product/' + slug + '">' +
            '<img src="' + image.fields.file.url + '" width="150" height="150" />' +
            '</a>'
    } else {
        return ''
    }
}
