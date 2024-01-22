import LoremIpsum from './LoremIpsum.js';


export default class BobRoss extends LoremIpsum {
    constructor(el) {
        super(el);

        this._citations = [
            'Take your time. Speed will come later. We\'ll take a little bit of Van Dyke Brown. At home you have unlimited time. We\'ll make some happy little bushes here.',
            'Everyone is going to see things differently - and that\'s the way it should be. Just a happy little shadow that lives in there.',
            'You can\'t have light without dark. You can\'t know happiness unless you\'ve known sorrow. It\'s all a game of angles. You can do anything here - the only pre-requisite is that it makes you happy.',
            'There is immense joy in just watching - watching all the little creatures in nature. Even trees need a friend. We all need friends. I really believe that if you practice enough you could paint the \'Mona Lisa\' with a two-inch brush.',
            'Let all these things just sort of happen. You create the dream - then you bring it into your world. Don\'t kill all your dark areas - you need them to show the light.',
            'Let\'s have a nice tree right here. The only prerequisite is that it makes you happy. If it makes you happy then it\'s good. Remember how free clouds are.',
            'They just lay around in the sky all day long. Everybody\'s different. Trees are different. Let them all be individuals. If you overwork it you become a cloud killer.',
            'There\'s nothing worse than a cloud killer. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.',
            'Just pretend you are a whisper floating across a mountain. Trees get lonely too, so we\'ll give him a little friend. And right there you got an almighty cloud.',
            'Let\'s put some happy trees and bushes back in here. Anyone can paint. In painting, you have unlimited power. You have the ability to move mountains.',
            'Happy painting, God bless. Everyone wants to enjoy the good parts - but you have to build the framework first. And maybe, maybe, maybe... The secret to doing anything is believing that you can do it.',
            'Van Dyke Brown is a very nice brown, it\'s almost like a chocolate brown. You can spend all day playing with mountains. This is truly an almighty mountain.',
            'We have a fantastic little sky! Life is too short to be alone, too precious. Share it with a friend. There are no mistakes. You can fix anything that happens.',
            'Just think about these things in your mind and drop em\' on canvas. Get away from those little Christmas tree things we used to make in school.',
            'Now then, let\'s play. When you buy that first tube of paint it gives you an artist license. Everything\'s not great in life, but we can still find beauty in it.',
            'I guess that would be considered a UFO. A big cotton ball in the sky. Let your heart take you to wherever you want to be.',
            'Each highlight must have it\'s own private shadow. We don\'t really know where this goes - and I\'m not sure we really care. Imagination is the key to painting.',
            'Just let these leaves jump off the brush Work on one thing at a time. Don\'t get carried away - we have plenty of time.',
            'Let\'s have a happy little tree in here. Talk to trees, look at the birds. Whatever it takes. I think there\'s an artist hidden in the bottom of every single one of us.'
        ];

        this.init();
    }


    /**
     * Affiche le côté dos de la tuile
     * @param {Array} aCitations 
     */
    afficheDos() {
        this.elCitation.innerHTML = `<p>${this.citation}</p>
                                    <small>- Bob Ross</small>`; 
                                
        this.el.classList.add('ipsum--flip');
    }
}