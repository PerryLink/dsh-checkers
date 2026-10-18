# @perrylink/dsh-checkers

Instalador de un solo comando para la **suite de 53 comprobadores** de PerryLink.

```sh
dsh plugin --profile web add @perrylink/dsh-checkers
```

Instala todos los comprobadores e inserta las 53 filas de Cordis mediante una sola
capa de bundle. Cada comprobador conserva su nombre npm, paquete de reglas, README
y versión; este paquete es solo el punto de entrada de la suite.

**Alcance:** comprobaciones documentales del dominio chino (comercio, aduanas,
licitaciones, HSE, medicina, legal, administración pública, manufactura). Cada
comprobador solo señala diferencias y no emite una calificación legal/médica/aduanera.
La lista exacta y las versiones están en `checkers.json`.

**Desinstalar:** `dsh plugin --profile web remove @perrylink/dsh-checkers`.

Apache-2.0. Regenerar con `node build.mjs`.
