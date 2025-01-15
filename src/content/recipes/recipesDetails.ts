import { RecipeDetail } from "@interfaces/interfaces";

export const recipesDetails: Record<string, RecipeDetail> = {
  '1': {
    id: '1',
    title: 'Rollitos de pechuga de pavo rellenos de hummus',
    image: 'https://www.vidaenbalance.com/wp-content/uploads/2023/05/Rollitos-de-pechuga-de-pavo-rellenos-de-hummus-sobre-ensalada-de-farro-1.jpg',
    ingredients: [
      '1 taza de farro',
      '3 tazas de agua',
      '1 cucharadita de caldo de verdura en polvo',
      '4 cucharadas de aceite de oliva',
      '¼ de cebolla morada picada',
      '3 cucharadas de perejil picado',
      '2 jitomates picados',
      '½ chile serrano picado',
      '2 limones',
      '1 taza de hummus',
      '1 paquete de Pechuga de Pavo San Rafael® Balance®',
      '½ taza de hojas pequeñas de albahaca',
      'Sal y pimienta al gusto'
    ],
    preparation: [
      'Coloca el farro en una olla mediana con el agua. Deja remojar durante 20 minutos. Agrega el caldo de verdura, tapa y cuece a fuego alto hasta que comience a hervir. Baja el fuego al mínimo y cuece durante 20 minutos. Agrega el aceite de oliva y deja enfriar.',
      'Integra la cebolla morada, perejil, jitomate, chile serrano y jugo de limón, salpimienta.',
      'Rellena las rebanadas de Pechuga de Pavo San Rafael® Balance® con el hummus y enrolla. Sirve sobre una base de la mezcla anterior y termina con las hojas de albahaca.'
    ],
    timePrep: '25 minutos',
    portions: '5 porciones',
    difficulty: 'Fácil'
  },
  '2': {
    id: '2',
    title: 'Wrap de Pavo y Aguacate',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1600&h=900&q=80',
    ingredients: [
      '2 tortillas de harina integral',
      '150g de Pechuga de Pavo Balance®',
      '1 aguacate maduro',
      '1/2 taza de espinacas baby',
      '1/4 de cebolla morada en juliana',
      '2 cucharadas de crema agria light',
      'Jugo de medio limón',
      'Sal y pimienta al gusto'
    ],
    preparation: [
      'Calienta ligeramente las tortillas para que sean más flexibles.',
      'En un bowl, machaca el aguacate y mezcla con el jugo de limón, sal y pimienta.',
      'Unta la mezcla de aguacate sobre cada tortilla.',
      'Coloca las lonchas de Pechuga de Pavo Balance® sobre el aguacate.',
      'Agrega las espinacas y la cebolla morada.',
      'Añade una cucharada de crema agria light.',
      'Enrolla firmemente cada wrap, cortando en diagonal para servir.'
    ],
    timePrep: '20 minutos',
    portions: '2 porciones',
    difficulty: 'Fácil'
  },
  '3': {
    id: '3',
    title: 'Ensalada César con Pavo',
    image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=1600&h=900&q=80',
    ingredients: [
      '200g de Pechuga de Pavo Balance®',
      '1 lechuga romana',
      '1/2 taza de crutones integrales',
      '1/4 taza de queso parmesano rallado',
      'Para la salsa:',
      '2 cucharadas de yogur griego',
      '1 cucharada de mostaza Dijon',
      '1 diente de ajo picado',
      'Jugo de medio limón',
      'Sal y pimienta al gusto'
    ],
    preparation: [
      'Lava y corta la lechuga en trozos medianos.',
      'Prepara la salsa mezclando el yogur, mostaza, ajo, jugo de limón, sal y pimienta.',
      'En un bowl grande, coloca la lechuga.',
      'Agrega las lonchas de Pechuga de Pavo Balance® cortadas en tiras.',
      'Vierte la salsa y mezcla bien.',
      'Añade los crutones y el queso parmesano.',
      'Sirve inmediatamente.'
    ],
    timePrep: '25 minutos',
    portions: '2 porciones',
    difficulty: 'Media'
  }
  // Puedes seguir agregando más recetas siguiendo el mismo formato
};

