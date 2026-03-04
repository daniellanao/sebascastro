export type Film = {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  /** Vimeo embed URL (e.g. https://player.vimeo.com/video/282393299?h=39f5af31ad). One per project is enough. */
  videoUrl?: string;
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
  { id: "1", title: "SoaftSoap Hand Wash", slug: "soaftsoap_hand_wash", category: "Commercial", image: "/commercials/1_soaft_soap_hand_wash.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "2", title: "Johnnie Walker Country Edition Peru", slug: "johnnie_walker_country_edition_peru", category: "Commercial", image: "/commercials/2_johnnie_walker_country_edition_peru.jpg" , videoUrl: "https://player.vimeo.com/video/282393299" },
  { id: "3", title: "Johnnie Walker Country Edition Peru", slug: "johnnie_walker_country_edition_peru", category: "Commercial", image: "/commercials/2_johnnie_walker_country_edition_peru2.jpg" , videoUrl: "https://player.vimeo.com/video/282393299" },
  { id: "4", title: "Movistar Nueva Fibra", slug: "movistar_nueva_fibra", category: "Commercial", image: "/commercials/3_movistar_nueva_fibra.jpg" , videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "5", title: "Smirnoff Bitter Citric", slug: "smirnoff_bitter_citric", category: "Commercial", image: "/commercials/3_smirnoff_bitter_citric.jpg"     , videoUrl: "https://player.vimeo.com/video/316676738" },
  { id: "6", title: "Kambista Apuradimia", slug: "kambista_apuradimia", category: "Commercial", image: "/commercials/4_kambista_apuradimia.jpg", videoUrl: "https://player.vimeo.com/video/376217646" },
  { id: "7", title: "Bembos Bicentenario", slug: "bembos_bicentenario", category: "Commercial", image: "/commercials/5_bembos_bicentenario.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "8", title: "Promart Piscinas", slug: "promart_piscinas", category: "Commercial", image: "/commercials/6_promart_piscinas.jpg", videoUrl: "https://player.vimeo.com/video/751864796" },
  { id: "9", title: "Coolfresh Verano", slug: "coolfresh_verano", category: "Commercial", image: "/commercials/7_coolfresh_verano.jpg", videoUrl: "https://player.vimeo.com/video/916325528" },
  { id: "10", title: "Pommarola Albahaca y Espinaca", slug: "pommarola_albahaca_y_espinaca", category: "Commercial", image: "/commercials/8_pommarola_albahaca_y_espinaca.jpg", videoUrl: "https://player.vimeo.com/video/751859782" },
  { id: "11", title: "Movistar La Red Mas Veloz", slug: "movistar_la_red_mas_veloz", category: "Commercial", image: "/commercials/9_movistar_la_red_mas_veloz.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "12", title: "Cumbra", slug: "cumbra", category: "Commercial", image: "/commercials/10_cumbra.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "13", title: "Yanbal Ganamas", slug: "yanbal_ganamas", category: "Commercial", image: "/commercials/11_yanbal_ganamas.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "14", title: "Movistar Nueva Fibra", slug: "movistar_nueva_fibra", category: "Commercial", image: "/commercials/12_movistar_nueva_fibra.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "15", title: "Cusqueña Quinua", slug: "cusquena_quinua", category: "Commercial", image: "/commercials/13_cusquena_quinua.jpg", videoUrl: "https://player.vimeo.com/video/273358551" },
  { id: "16", title: "Sodexo", slug: "sodexo", category: "Commercial", image: "/commercials/14_sodexo.jpg", videoUrl: "https://player.vimeo.com/video/916324261" },
  { id: "17", title: "Blancaflor Expertas del Cariño", slug: "blancaflor_expertas_del_carino", category: "Commercial", image: "/commercials/15_blancaflor_expertas_del_carino.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "18", title: "Carrión Negocios", slug: "carrion_negocios", category: "Commercial", image: "/commercials/16_carrion_negocios.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "19", title: "Maggie Ritmo Color y Sazón", slug: "maggie_ritmo_color_y_sazon", category: "Commercial", image: "/commercials/17_maggie_ritmo_color_y_sazon.jpg", videoUrl: "https://player.vimeo.com/video/503201532" },
  { id: "20", title: "Hyundai Los Nuevos Hyundai", slug: "hyundai_los_nuevos_hyundai", category: "Commercial", image: "/commercials/18_hyundai_los_nuevos_hyundai.jpg", videoUrl: "https://player.vimeo.com/video/751859782" },
  { id: "21", title: "Caja Piura Horacio", slug: "caja_piura_horacio", category: "Commercial", image: "/commercials/19_caja_piura_horacio.jpg", videoUrl: "https://player.vimeo.com/video/807702938" },
  { id: "22", title: "Faber Castell Dragón", slug: "faber_castell_dragon", category: "Commercial", image: "/commercials/20_faber_castell_dragon.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "23", title: "Scotiabank Tu Turno", slug: "scotiabank_tu_turno", category: "Commercial", image: "/commercials/21_scotiabank_tu_turno.jpg", videoUrl: "https://player.vimeo.com/video/273358001" },
  { id: "24", title: "Tottus Preciazo", slug: "tottus_preciazo", category: "Commercial", image: "/commercials/22_tottus_preciazo.jpg" , videoUrl: "https://player.vimeo.com/video/290602649"},
];
