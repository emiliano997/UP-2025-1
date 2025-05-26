import { Card } from "./Card/Card";

export function Description() {
  return (
    <section id="description">
      <Card
        img="check.svg"
        title="100% Responsive"
        description="El sitio se adapta a cualquier dispositivo, ya sea móvil, tablet o escritorio."
      />
      <Card
        img="components.svg"
        title="Componentes Reutilizables"
        description="Los componentes están diseñados para ser reutilizables, lo que facilita el mantenimiento y la escalabilidad."
      />
      <Card
        img="design.svg"
        title="Diseño Moderno"
        description="El diseño es moderno y atractivo, siguiendo las mejores prácticas de UI/UX."
      />
    </section>
  );
}
