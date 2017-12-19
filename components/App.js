var contacts = [{
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    },
    {
        id: 4,
        firstName: 'Tomasz',
        lastName: 'Kinel',
        email: 'tomasz.kinel@example.com',
    }
];

//pusty obiekt dla formularza dodającego kontakt
var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

//klasa App która będzie renderowana do diva o klasie app.
var App = React.createClass({
    render: function() {
        return (

            <div className={'app'}>
                <ContactForm contact={contactForm}/>
                <Contacts items={contacts}/>
            </div>
        );
    }
});