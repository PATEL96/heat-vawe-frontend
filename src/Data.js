import {TupacCamel,
    SnoopDawgBlack,
    EminemWhite,
    EminemLavendar,
    DoodleLavender,
    BobMarleyWhite,
    BobMarleyLavender,
    BobMarleyCamel,
    BeegieBlack,
    Bear,
} from "./images/Photos"

export const Products=[
    {
        Title:"Bear",
        Colors:['White',"Black" ],
        Images:{White:Bear,Black:Bear},
        Image:Bear,
        Price:450,
    },
    {
        Title:"Tu Pac",
        Colors:['Camel' ],
        Images:{Camel:TupacCamel},
        Price:600,
        Image:TupacCamel,
    },
    {
        Title:"Beegie",
        Colors:["Black"],
        Images:{Black:BeegieBlack},
        Price:600,
        Image:BeegieBlack,
        
    },
    {
        Title:"Doodle",
        Colors:["Lavender"],
        Images:{Lavender:DoodleLavender},
        Price:600,
        Image:DoodleLavender
    },
    {
        Title:"Eminem",
        Colors:["White","Lavender"],
        Images:{White:EminemWhite,Lavender:EminemLavendar},
        Price:600,
        Image:EminemWhite
    },
    {
        Title:"Snoop Dawg",
        Colors:['Black'],
        Images:{Black:SnoopDawgBlack},
        Price:600,
        Image:SnoopDawgBlack
    },
    {
        Title:"Bob Marley",
        Colors:['Camel',"Lavender","White"],
        Images:{ White:BobMarleyWhite,
                Lavender:BobMarleyLavender,
                Camel:BobMarleyCamel
            },
        Price:600,
        Image:BobMarleyWhite
    },
    
    
]