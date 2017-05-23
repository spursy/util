const tmpl = addrs => `
    <table>
        ${
            addrs.map(addr => `
                <tr><td>${addr.first}</td></tr>
                <tr><td>${addr.last}</td></tr>
            `).join('')
        }
    </table>
`;

const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: '<Spursy>', last: 'YY'},
]

console.log(tmpl(data));