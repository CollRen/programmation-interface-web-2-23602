import LoremIpsum from './LoremIpsum.js';


export default class Cupcake extends LoremIpsum {
    constructor(el) {
        super(el);

        this._citations = [
            'Marzipan cotton candy tiramisu danish jelly beans sugar plum tootsie roll topping biscuit. Dragée jujubes chupa chups jujubes macaroon jelly.',
            'Biscuit gummies liquorice cupcake croissant toffee cupcake. Croissant sweet roll fruitcake carrot cake tootsie roll lemon drops.',
            'Sweet roll chocolate cake jujubes. Cotton candy macaroon dragée soufflé. Liquorice sweet tiramisu topping gummies topping.',
            'Cookie chocolate bar gingerbread cupcake bonbon gingerbread pudding bear claw. Brownie ice cream caramels jelly beans icing dragée.',
            'Biscuit cupcake croissant chocolate bar jujubes jelly beans. Donut sugar plum cookie toffee marzipan. Carrot cake bear claw jelly beans donut. Bonbon cake cake jelly icing.',
            'Cupcake marshmallow pastry jelly beans candy canes bear claw cake jelly beans cake. Danish biscuit icing jujubes cake jelly-o.',
            'Jujubes sugar plum chocolate chupa chups gummies chocolate tootsie roll toffee. Caramels candy tootsie roll pudding liquorice. Toffee chocolate bar gingerbread.',
            'Jelly beans biscuit jelly chocolate sweet croissant gummies icing tiramisu. Ice cream powder danish dessert bonbon danish dragée chocolate candy canes.',
            'Icing cake candy cookie cheesecake marshmallow marzipan halvah donut. Chocolate cake pudding sesame snaps bonbon sweet topping jelly dragée caramels.',
            'Powder macaroon cookie. Chocolate cake dessert cupcake cookie sweet roll apple pie tiramisu apple pie. Chocolate bar icing danish chocolate cake sweet donut.',
            'Apple pie oat cake sweet roll dragée jelly beans chocolate cake cookie bear claw. Lollipop lollipop cotton candy cotton candy jujubes donut chocolate cake.',
            'Icing fruitcake liquorice cotton candy jelly beans liquorice tiramisu oat cake. Pudding cake tootsie roll danish chocolate cake wafer cake chocolate bar.',
            'Lemon drops toffee gummi bears tootsie roll sesame snaps croissant gummi bears chupa chups cookie.',
            'Caramels cotton candy jelly beans brownie jelly halvah brownie macaroon jujubes. Gummies cookie gummi bears caramels chupa chups gummi bears.',
            'Tiramisu biscuit macaroon wafer muffin topping bonbon jujubes. Gingerbread sweet roll dessert dessert dragée pastry jujubes pastry cotton candy.',
            'Danish powder jelly beans. Pastry icing chupa chups jujubes. Fruitcake donut topping muffin danish. Icing tiramisu muffin caramels toffee muffin.',
            'Cake lollipop pudding jelly tart croissant sugar plum. Lollipop tiramisu cupcake powder wafer liquorice pudding cake.',
            'Tiramisu gingerbread bear claw marshmallow soufflé bear claw. Lollipop jelly beans lemon drops carrot cake topping soufflé marzipan wafer.'
        ];

        this.init();
    }
}