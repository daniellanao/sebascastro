export type Film = {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  /** Vimeo embed URL (e.g. https://player.vimeo.com/video/282393299?h=39f5af31ad). One per project is enough. */
  videoUrl?: string;
  /** Optional local video path for card preview (loops, muted). When set, card shows video instead of image. */
  videoLoop?: string;
};

/** Get all films for a project by its slug (projects can have multiple films, e.g. same title, different images) */
export function getFilmsByProjectSlug(slug: string): Film[] {
  return films.filter((film) => film.slug === slug);
}

/** All unique project slugs for linking */
export function getProjectSlugs(): string[] {
  const slugs = new Set(films.map((f) => f.slug));
  return Array.from(slugs);
}

export const films: Film[] = [
  { id: "1", title: "SoaftSoap Hand Wash", slug: "soaftsoap_hand_wash", category: "Commercial", image: "/commercials/1_soaft_soap_hand_wash.jpg", videoUrl: "https://player.vimeo.com/video/273358001", videoLoop: "/commercials/1_soaft_soap_hand_wash.mov" },
  { id: "2", title: "Johnnie Walker Country Edition Peru", slug: "johnnie_walker_country_edition_peru", category: "Commercial", image: "/commercials/2_johnnie_walker_country_edition_peru.jpg" , videoUrl: "https://player.vimeo.com/video/282393299", videoLoop: "/commercials/2_johnnie_walker_country_edition_peru.mov" },  
  { id: "3", title: "Movistar Quipu", slug: "movistar_quipu", category: "Commercial", image: "/commercials/3_movistar_quipu.jpg" , videoUrl: "https://player.vimeo.com/video/1168909523"  , videoLoop: "/commercials/3_movistar_quipu.mov" },
  { id: "4", title: "Smirnoff Bitter Citric", slug: "smirnoff_bitter_citric", category: "Commercial", image: "/commercials/3_smirnoff_bitter_citric.jpg"     , videoUrl: "https://player.vimeo.com/video/316676738"  , videoLoop: "/commercials/3_smirnoff_bitter_citric.mov" },
  { id: "5", title: "Kambista Apuradimia", slug: "kambista_apuradimia", category: "Commercial", image: "/commercials/4_kambista_apuradimia.jpg", videoUrl: "https://player.vimeo.com/video/376217646"  , videoLoop: "/commercials/4_kambista_apuradimia.mov" },
  { id: "6", title: "Bembos Bicentenario", slug: "bembos_bicentenario", category: "Commercial", image: "/commercials/5_bembos_bicentenario.jpg", videoUrl: "https://player.vimeo.com/video/1168908705"  , videoLoop: "/commercials/5_bembos_bicentenario.mov" },
  { id: "7", title: "Promart Piscinas", slug: "promart_piscinas", category: "Commercial", image: "/commercials/6_promart_piscinas.jpg", videoUrl: "https://player.vimeo.com/video/751864796"  , videoLoop: "/commercials/6_promart_piscinas.mov" },
  { id: "8", title: "Coolfresh Verano", slug: "coolfresh_verano", category: "Commercial", image: "/commercials/7_coolfresh_verano.jpg", videoUrl: "https://player.vimeo.com/video/916325528"  , videoLoop: "/commercials/7_coolfresh_verano.mov" },
  { id: "9", title: "Pomarola Albahaca y Espinaca", slug: "pomarola_albahaca_y_espinaca", category: "Commercial", image: "/commercials/8_pomarola_albahaca_y_espinaca.jpg", videoUrl: "https://player.vimeo.com/video/751859782"  , videoLoop: "/commercials/8_pomarola_albahaca_y_espinaca.mov" },
  { id: "10", title: "Movistar La Red Mas Veloz", slug: "movistar_la_red_mas_veloz", category: "Commercial", image: "/commercials/9_movistar_la_red_mas_veloz.jpg", videoUrl: "https://player.vimeo.com/video/1168904420", videoLoop: "/commercials/9_movistar_la_red_mas_veloz.mov" },
  { id: "11", title: "Cumbra", slug: "cumbra", category: "Commercial", image: "/commercials/10_cumbra.jpg", videoUrl: "https://player.vimeo.com/video/523486902"  , videoLoop: "/commercials/10_cumbra.mov" },
  { id: "12", title: "Yanbal Ganamas", slug: "yanbal_ganamas", category: "Commercial", image: "/commercials/11_yanbal_ganamas.jpg", videoUrl: "https://player.vimeo.com/video/1168912081"  , videoLoop: "/commercials/11_yanbal_ganamas.mov" },
  { id: "13", title: "Movistar Chalaca", slug: "movistar_chalaca", category: "Commercial", image: "/commercials/12_movistar_chalaca.jpg", videoUrl: "https://player.vimeo.com/video/1168909490"  , videoLoop: "/commercials/12_movistar_chalaca.mov" },
  { id: "14", title: "Cusqueña Quinua", slug: "cusquena_quinua", category: "Commercial", image: "/commercials/13_cusquena_quinua.jpg", videoUrl: "https://player.vimeo.com/video/273358551"  , videoLoop: "/commercials/13_cusquena_quinua.mov" },
  { id: "15", title: "Sodexo", slug: "sodexo", category: "Commercial", image: "/commercials/14_sodexo.jpg", videoUrl: "https://player.vimeo.com/video/916324261"  , videoLoop: "/commercials/14_sodexo.mov" },
  { id: "16", title: "Blancaflor Expertas del Cariño", slug: "blancaflor_expertas_del_carino", category: "Commercial", image: "/commercials/15_blancaflor_expertas_del_carino.jpg", videoUrl: "https://player.vimeo.com/video/1168918932"  , videoLoop: "/commercials/15_blancaflor_expertas_del_carino.mov" },
  { id: "17", title: "Carrión Negocios", slug: "carrion_negocios", category: "Commercial", image: "/commercials/16_carrion_negocios.jpg", videoUrl: "https://player.vimeo.com/video/1168917583"  , videoLoop: "/commercials/16_carrion_negocios.mov" },
  { id: "18", title: "Maggie Ritmo Color y Sazón", slug: "maggie_ritmo_color_y_sazon", category: "Commercial", image: "/commercials/17_maggie_ritmo_color_y_sazon.jpg", videoUrl: "https://player.vimeo.com/video/503201532"  , videoLoop: "/commercials/17_maggie_ritmo_color_y_sazon.mov" },
  { id: "19", title: "Hyundai Los Nuevos Hyundai", slug: "hyundai_los_nuevos_hyundai", category: "Commercial", image: "/commercials/18_hyundai_los_nuevos_hyundai.jpg", videoUrl: "https://player.vimeo.com/video/531016848"  , videoLoop: "/commercials/18_hyundai_los_nuevos_hyundai.mov" },
  { id: "20", title: "Caja Piura Horacio", slug: "caja_piura_horacio", category: "Commercial", image: "/commercials/19_caja_piura_horacio.jpg", videoUrl: "https://player.vimeo.com/video/807702938"  , videoLoop: "/commercials/19_caja_piura_horacio.mov" },
  { id: "21", title: "Faber Castell Dragón", slug: "faber_castell_dragon", category: "Commercial", image: "/commercials/20_faber_castell_dragon.jpg", videoUrl: "https://player.vimeo.com/video/273358652"  , videoLoop: "/commercials/20_faber_castell_dragon.mov" },
  { id: "22", title: "Scotiabank Tu Turno", slug: "scotiabank_tu_turno", category: "Commercial", image: "/commercials/21_scotiabank_tu_turno.jpg", videoUrl: "https://player.vimeo.com/video/1168918133"  , videoLoop: "/commercials/21_scotiabank_tu_turno.mov" },
  { id: "23", title: "Tottus Preciazo", slug: "tottus_preciazo", category: "Commercial", image: "/commercials/22_tottus_preciazo.jpg" , videoUrl: "https://player.vimeo.com/video/290602649" , videoLoop: "/commercials/22_tottus_preciazo.mov" },
  { id: "24", title: "Nike the cushioning route", slug: "nike_the_cushioning_route", category: "Commercial", image: "/commercials/23_nike_the_cushioning_route.jpg" , videoUrl: "https://player.vimeo.com/video/290602649" , videoLoop: "/commercials/23_nike_the_cushioning_route.mov" },
];
