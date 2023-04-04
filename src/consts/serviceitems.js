import img1 from './../images/service1.jpg';
import img2 from './../images/service2.jpg';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const services = {
    title: '3 pasi achizitionare produs',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus.',
    image: img1,
    link: 'Contacteaza-ne prin email sau nr. telefon',
    list: [
        {
            id: 1,
            text: 'Ne comunici ce produse iti doresti si dimensiunile acestora quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna',
            icon: LooksOneIcon,
        },
        {
            id: 2,
            text: 'Calculare pret produse, stabilire data/durata si achitarea avansului sed libero enim sed faucibus turpis in eu mi bibendum neque egestas .',
            icon: LooksTwoIcon,
        },
        {
            id: 3,
            text: 'Livrarea si montajul termopanelor. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat.',
            icon: Looks3Icon,
        },
    ],
};

export const curving = {
    title: 'Curbare cadrane',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis.',
    image: img2,
    link: 'Vezi lucrari precedente',
    list: [
        {
            id: 1,
            text: 'Ferestre cu deshchidere simpla sau dubla at varius vel pharetra vel turpis nunc eget lorem dolor enim eu turpis egestas pretium aenean pharetra magna ac placerat.',
            icon: FiberManualRecordIcon,
        },
        {
            id: 2,
            text: 'Usi si usi balcon scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id',
            icon: FiberManualRecordIcon,
        },
        {
            id: 3,
            text: 'Pervaze, plase tantari si rulouri tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent.',
            icon: FiberManualRecordIcon,
        },
    ],
};
