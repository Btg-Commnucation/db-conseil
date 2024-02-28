import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Tmenu = {
  ID: number;
  title: string;
  slug: string;
  target: string;
  classes: string[];
}[];

export type TFooter = {
  adresse: string;
  linkedin: { lien: { title: string; target: string; url: string } }[]
  mentions_legales: { title: string; target: string; url: string; };
  realisation: { title: string; target: string; url: string; }
}

const initialState: { header: Tmenu; footer: TFooter | null } = {
  header: [],
  footer: {
    adresse: '',
    linkedin: [],
    mentions_legales: {title: '', target: '', url: ''},
    realisation: {title: '', target: '', url: ''},
  }
}

  export const menuSlice = createSlice( {
    name: 'menu',
    initialState,
    reducers: {
      setHeaderMenu: ( state, action: PayloadAction<Tmenu> ) => {
        state.header = action.payload;
      },
      setFooterMenu: ( state, action: PayloadAction<TFooter> ) => {
        state.footer = action.payload;
      },
    },
  } );

  export const {setHeaderMenu, setFooterMenu} = menuSlice.actions;

  export default menuSlice.reducer;
