import styles from './Testemunhos.module.css';

function Testemunhos() {


  const testimonials = [
    {
      quote: "A Pathway transformou completamente nossa abordagem de RH. Estamos vendo resultados incríveis!",
      author: "Maria Silva",
      position: "CEO da TechInova"
    },
    {
      quote: "Os programas de treinamento da Pathway elevaram o nível de habilidades de nossa equipe.",
      author: "João Santos",
      position: "Diretor de RH da MegaCorp"
    },
    {
      quote: "Com a Pathway, conseguimos atingir um alto nível de eficiência.",
      author: "Ana Oliveira",
      position: "Recrutadora Sênior"
    },
    {
      quote: "Os programas de treinamento da Pathway elevaram o nível de habilidades de nossa equipe.",
      author: "João Santos",
      position: "Diretor de RH da MegaCorp"
    },
    {
      quote: "Com a Pathway, conseguimos atingir um alto nível de eficiência.",
      author: "Ana Oliveira",
      position: "Recrutadora Sênior"
    }
  ];

  return (
    <section className={styles.testemunhos}>
      <h2 className={styles.title}>O que nossos clientes dizem</h2>
      <div className={styles.carousel}>
        
        <div className={styles.testimonialContainer}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonial}`}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <p className={styles.author}>{testimonial.author}</p>
              <p className={styles.position}>{testimonial.position}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Testemunhos;