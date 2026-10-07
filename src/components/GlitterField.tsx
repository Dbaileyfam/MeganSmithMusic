const SPARKLES = Array.from({ length: 26 }, (_, i) => {
  const left = (i * 47 + 6) % 100;
  const top = (i * 19 + (i % 5) * 11) % 100;
  const size = 1.5 + (i % 4) * 0.85;
  return {
    left: `${left}%`,
    top: `${top}%`,
    size,
    delay: `${(i % 10) * 0.32}s`,
    duration: `${2.4 + (i % 6) * 0.45}s`,
    star: i % 11 === 0,
  };
});

export function GlitterField() {
  return (
    <div className="ms-sky" aria-hidden>
      <div className="ms-sky-orb ms-sky-orb--a" />
      <div className="ms-sky-orb ms-sky-orb--b" />
      <div className="ms-sky-orb ms-sky-orb--c" />
      {SPARKLES.map((spark, index) => (
        <span
          key={index}
          className={spark.star ? "ms-spark ms-spark--star" : "ms-spark"}
          style={{
            left: spark.left,
            top: spark.top,
            width: spark.star ? undefined : spark.size,
            height: spark.star ? undefined : spark.size,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        />
      ))}
      <div className="ms-sky-vignette" />
    </div>
  );
}
