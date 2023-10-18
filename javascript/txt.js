document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Técnico em Informática', {delay: 3000}).delete(25).type('Desenvolvedor Web Front-end', {delay: 3000})
    
    
    .go()
})