import { RecipeDetail } from "@interfaces/interfaces";

export const recipesDetails: Record<string, RecipeDetail> = {
  '1': {
    id: '1',
    title: 'Sándwich Mediterráneo',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1600&h=900&q=80',
    ingredients: [
      '4 rebanadas de pan integral',
      '100g de Pechuga de Pavo Balance®',
      '1 tomate mediano en rodajas',
      '1 aguacate',
      'Hojas de lechuga fresca',
      '2 cucharadas de aceite de oliva',
      'Sal y pimienta al gusto',
      'Hojas de albahaca fresca'
    ],
    preparation: [
      'Tuesta ligeramente el pan integral.',
      'Unta una capa delgada de aguacate machacado en cada rebanada de pan.',
      'Coloca las lonchas de Pechuga de Pavo Balance® sobre el aguacate.',
      'Añade las rodajas de tomate y las hojas de lechuga.',
      'Decora con hojas de albahaca fresca.',
      'Rocía un poco de aceite de oliva y añade sal y pimienta al gusto.',
      'Cubre con la otra rebanada de pan y sirve inmediatamente.'
    ],
    timePrep: '15 minutos',
    portions: '2 porciones',
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

