import React from 'react'
import Header from './Header';

function Section({ header, children }: { header: string; children: React.ReactNode }) {
  return (
    <section className="content-center rounded-md">
        <Header tittle={header} />
        {children}
    </section>
  )
}

export default Section
