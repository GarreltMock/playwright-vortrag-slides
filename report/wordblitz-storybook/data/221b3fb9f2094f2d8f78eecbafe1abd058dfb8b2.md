# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: stories.visual.ts >> random-games--home-league-v-2--fbig
- Location: e2e/storybook/stories.visual.ts:11:9

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  20591 pixels (ratio 0.02 of all image pixels) are different.

  Snapshot: random-games--home-league-v-2--fbig.png

Call log:
  - Expect "toHaveScreenshot(random-games--home-league-v-2--fbig.png)" with timeout 15000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 20591 pixels (ratio 0.02 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 20591 pixels (ratio 0.02 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e7]:
    - generic [ref=e9]:
      - generic [ref=e10]: "10250"
      - generic [ref=e12] [cursor=pointer]: 2/3
      - generic [ref=e16] [cursor=pointer]: 2/2
      - generic [ref=e20] [cursor=pointer]
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic:
          - generic:
            - generic: 6d0h
            - generic [ref=e54] [cursor=pointer]:
              - generic [ref=e55]:
                - generic [ref=e57]:
                  - generic [ref=e58]: "2"
                  - generic [ref=e60]: "1"
                  - generic [ref=e62]: "3"
                - generic [ref=e64]: "#4"
              - generic [ref=e66]: 3d0h
        - generic [ref=e72] [cursor=pointer]: 20 000 / 25k
      - generic [ref=e85]:
        - generic [ref=e86] [cursor=pointer]
        - generic [ref=e96]: Mit Freunden spielen
      - generic [ref=e104]:
        - heading "Jouer contre des adversaires aléatoires" [level=2] [ref=e105]
        - generic [ref=e106]:
          - generic [ref=e110]: Bleskový duel
          - generic [ref=e111] [cursor=pointer]:
            - generic [ref=e114]: Spielen
            - generic [ref=e115]: "1"
        - generic [ref=e117]:
          - iframe [ref=e121]
          - generic [ref=e123]: Klasyczny pojedynek
          - generic [ref=e124] [cursor=pointer]:
            - generic [ref=e128]: Spielen
            - generic [ref=e129]: "1"
      - generic [ref=e132]:
        - generic [ref=e133]: À vous de jouer
        - generic [ref=e139] [cursor=pointer]:
          - generic [ref=e140]: Blitz Leagues
          - generic [ref=e141]: Brončana 5
          - generic [ref=e142]: preostalo je 20 dana
        - generic [ref=e147] [cursor=pointer]:
          - generic [ref=e156]:
            - text: "?"
            - generic [ref=e157]: "1"
          - generic [ref=e161]:
            - generic [ref=e162]: Nouveau joueur
            - generic [ref=e164]: "Jij 234 : 245 Tegenstander"
            - generic [ref=e165]: preostalo je 2 dana
        - generic [ref=e169] [cursor=pointer]:
          - iframe [ref=e174]
          - generic [ref=e181]:
            - iframe [ref=e185]:
              - paragraph [ref=f9e3]: Pia-Doreen
            - generic [ref=e186]: "Jij 234 : 245 Tegenstander"
            - generic [ref=e187]: preostalo je 2 dana
        - generic [ref=e191] [cursor=pointer]:
          - iframe [ref=e196]
          - generic [ref=e203]:
            - iframe [ref=e207]:
              - paragraph [ref=f12e3]: Pia-Doreen
            - generic [ref=e208]: "Jij 0 : 0 Tegenstander"
            - generic [ref=e209]: preostalo je 2 dana
        - generic [ref=e213] [cursor=pointer]:
          - iframe [ref=e218]
          - generic [ref=e225]:
            - iframe [ref=e229]:
              - paragraph [ref=f23e3]: Bob
            - generic [ref=e230]: Započni uzvratnu partiju
        - generic [ref=e237] [cursor=pointer]:
          - generic [ref=e238]: Word Blitz Event
          - generic [ref=e239]: Maior 100% - Ø 1500
          - generic [ref=e240]: preostalo je 3 dana
        - generic [ref=e245] [cursor=pointer]:
          - generic [ref=e248]:
            - generic [ref=e249]: Tägliches Spiel
            - generic [ref=e250]: Ø 456
            - generic [ref=e251]: il reste une heure
          - generic [ref=e256]:
            - generic [ref=e257]: Jan
            - generic [ref=e258]: "1"
        - generic [ref=e259] [cursor=pointer]:
          - iframe [ref=e264]
          - generic [ref=e271]:
            - iframe [ref=e275]:
              - paragraph [ref=f13e3]: Fabi
            - generic [ref=e276]: Goldenes Spiel
        - generic [ref=e280]: Classificaç.
        - generic [ref=e281]:
          - generic [ref=e282]: "1."
          - iframe [ref=e288]
          - generic [ref=e295]:
            - iframe [ref=e298]:
              - paragraph [ref=f32e3]: Janina
            - generic [ref=e299]: "100000"
          - generic [ref=e303] [cursor=pointer]: Start!
        - generic [ref=e309]:
          - generic [ref=e310]: "2."
          - iframe [ref=e316]
          - generic [ref=e320]:
            - iframe [ref=e323]:
              - paragraph [ref=f5e3]: Garrelt
            - generic [ref=e324]: "10250"
        - generic [ref=e328]:
          - generic [ref=e329]: "3."
          - generic [ref=e330]: "+1"
          - iframe [ref=e336]
          - generic [ref=e343]:
            - iframe [ref=e346]:
              - paragraph [ref=f11e3]: Bob
            - generic [ref=e347]: "7500"
          - generic [ref=e351] [cursor=pointer]: Start!
        - generic [ref=e357]:
          - generic [ref=e358]: "4."
          - generic [ref=e359]: "+1"
          - iframe [ref=e365]
          - generic [ref=e372]:
            - iframe [ref=e375]:
              - paragraph [ref=f29e3]: Bob
            - generic [ref=e376]: "7500"
          - generic [ref=e380] [cursor=pointer]: Start!
        - generic [ref=e386]:
          - generic [ref=e387]: "5."
          - iframe [ref=e393]
          - generic [ref=e400]:
            - iframe [ref=e403]:
              - paragraph [ref=f8e3]: Fabi
            - generic [ref=e404]: "7500"
          - generic [ref=e408] [cursor=pointer]: Start!
        - generic [ref=e414]:
          - generic [ref=e415]: "6."
          - iframe [ref=e421]
          - generic [ref=e428]:
            - iframe [ref=e431]:
              - paragraph [ref=f26e3]: Sam
            - generic [ref=e432]: "5000"
          - generic [ref=e436] [cursor=pointer]: Start!
        - generic [ref=e442]:
          - generic [ref=e443]: "7."
          - iframe [ref=e449]
          - generic [ref=e456]:
            - iframe [ref=e459]:
              - paragraph [ref=f4e3]: Rosa
            - generic [ref=e460]: "5000"
          - generic [ref=e464] [cursor=pointer]: Start!
        - generic [ref=e470]:
          - generic [ref=e471]: "8."
          - iframe [ref=e477]
          - generic [ref=e484]:
            - iframe [ref=e487]:
              - paragraph [ref=f1e3]: Anna
            - generic [ref=e488]: "5000"
          - generic [ref=e492] [cursor=pointer]: Start!
        - generic [ref=e498]:
          - generic [ref=e499]: "9."
          - iframe [ref=e505]
          - generic [ref=e512]:
            - iframe [ref=e515]:
              - paragraph [ref=f2e3]: Garrelt
            - generic [ref=e516]: "5000"
          - generic [ref=e520] [cursor=pointer]: Start!
        - generic [ref=e526]:
          - generic [ref=e527]: "10."
          - iframe [ref=e533]
          - generic [ref=e540]:
            - iframe [ref=e543]:
              - paragraph [ref=f31e3]: Anselm
            - generic [ref=e544]: "5000"
          - generic [ref=e548] [cursor=pointer]: Start!
        - generic [ref=e554]:
          - generic [ref=e555]: "11."
          - iframe [ref=e561]
          - generic [ref=e568]:
            - iframe [ref=e571]:
              - paragraph [ref=f10e3]: Paul
            - generic [ref=e572]: "400"
          - generic [ref=e576] [cursor=pointer]: Start!
        - generic [ref=e582]:
          - generic [ref=e583]: "12."
          - generic [ref=e585]:
            - generic [ref=e593]:
              - text: L
              - generic [ref=e594]: "1"
            - generic [ref=e598]: NOUVEAU
          - generic [ref=e601]:
            - generic [ref=e602]: LongName2
            - generic [ref=e603]: "0"
          - generic [ref=e607] [cursor=pointer]: Start!
        - generic [ref=e613]:
          - generic [ref=e614]: "13."
          - generic [ref=e616]:
            - generic [ref=e624]:
              - text: L
              - generic [ref=e625]: "1"
            - generic [ref=e629]: NOUVEAU
          - generic [ref=e632]:
            - generic [ref=e633]: LongName3
            - generic [ref=e634]: "0"
          - generic [ref=e638] [cursor=pointer]: Start!
        - generic [ref=e644]:
          - generic [ref=e645]: "14."
          - generic [ref=e647]:
            - generic [ref=e655]:
              - text: L
              - generic [ref=e656]: "1"
            - generic [ref=e660]: NOUVEAU
          - generic [ref=e663]:
            - generic [ref=e664]: LongName4
            - generic [ref=e665]: "0"
        - generic [ref=e669]:
          - generic [ref=e670]: "15."
          - generic [ref=e672]:
            - generic [ref=e680]:
              - text: L
              - generic [ref=e681]: "1"
            - generic [ref=e685]: NOUVEAU
          - generic [ref=e688]:
            - generic [ref=e689]: LongName6
            - generic [ref=e690]: "0"
          - generic [ref=e694] [cursor=pointer]: Start!
        - generic [ref=e700]:
          - generic [ref=e701]: "16."
          - generic [ref=e703]:
            - generic [ref=e711]:
              - text: L
              - generic [ref=e712]: "1"
            - generic [ref=e716]: NOUVEAU
          - generic [ref=e719]:
            - generic [ref=e720]: LongName7
            - generic [ref=e721]: "0"
          - generic [ref=e725] [cursor=pointer]: Start!
        - generic [ref=e731]:
          - generic [ref=e732]: "17."
          - generic [ref=e734]:
            - generic [ref=e742]:
              - text: L
              - generic [ref=e743]: "1"
            - generic [ref=e747]: NOUVEAU
          - generic [ref=e750]:
            - generic [ref=e751]: LongName8
            - generic [ref=e752]: "0"
          - generic [ref=e756] [cursor=pointer]: Start!
        - generic [ref=e762]:
          - generic [ref=e763]: "18."
          - generic [ref=e772]:
            - text: "?"
            - generic [ref=e773]: "1"
          - generic [ref=e774]: Uitnodigen
          - generic [ref=e775] [cursor=pointer]
        - generic [ref=e778]: Oczekiwanie na
        - generic [ref=e779] [cursor=pointer]:
          - iframe [ref=e786]
          - generic [ref=e790]:
            - generic [ref=e791]: Tournament
            - generic [ref=e792]: Miejsce 1 spośród 1
            - generic [ref=e793]: preostao je jedan dan
        - generic [ref=e798]:
          - generic [ref=e799]: The Test
          - generic [ref=e802]: Quiz Planet
          - generic [ref=e805]: 4 Bilder
          - generic [ref=e808]: Verbinde
          - generic [ref=e811]: Spider
        - generic [ref=e814]: Partidas finalizadas
        - generic [ref=e815] [cursor=pointer]:
          - generic [ref=e827]:
            - generic [ref=e828]: Victoire
            - generic [ref=e833]: vor einer Sekunde
          - generic [ref=e835]:
            - generic [ref=e836]: +
            - generic [ref=e837]: "13"
  - generic [ref=e839]:
    - generic [ref=e840] [cursor=pointer]
    - generic [ref=e843] [cursor=pointer]
    - generic [ref=e849] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, test, type Page } from '@playwright/test'
  2  | import { readFileSync } from 'node:fs'
  3  | 
  4  | import { shotsFor, type StoryIndex } from './shots'
  5  | import { isolateImageScales, rerasterWillChangeLayers, stabilize, waitForStoryFinished } from './stabilize'
  6  | 
  7  | // Relative to web/, where playwright runs.
  8  | const INDEX_PATH = 'storybook-visual/index.json'
  9  | 
  10 | for (const shot of shotsFor(readIndex())) {
  11 |     test(shot.name, async ({ page }) => {
  12 |         const requests = await test.step('setup', () => stabilize(page))
  13 | 
  14 |         await test.step('navigation', () => page.goto(shot.url))
  15 |         await test.step('readiness', () => waitForStoryFinished(page))
  16 | 
  17 |         await expect(page.locator('body')).toHaveClass(/sb-show-main/)
  18 |         expect(requests.failed).toStrictEqual([])
  19 |         await test.step('viewport', () => fitViewportToContent(page))
  20 |         await test.step('image scales', () => isolateImageScales(page))
  21 |         await test.step('re-raster', () => rerasterWillChangeLayers(page))
> 22 |         await test.step('screenshot', () => expect(page).toHaveScreenshot(`${shot.name}.png`))
     |                                                          ^ Error: expect(page).toHaveScreenshot(expected) failed
  23 |         expect(requests.blocked).toStrictEqual([])
  24 |     })
  25 | }
  26 | 
  27 | function readIndex(): StoryIndex {
  28 |     try {
  29 |         return JSON.parse(readFileSync(INDEX_PATH, 'utf8')) as StoryIndex
  30 |     } catch {
  31 |         throw new Error(`${INDEX_PATH} is missing — run \`npm run build:storybook:visual\` first`)
  32 |     }
  33 | }
  34 | 
  35 | /**
  36 |  * The app styles clip the body (`overflow: hidden`), so a full-page shot never grows. Grow the viewport to
  37 |  * what renders offscreen instead: a screen's scroll content, or a tall component story.
  38 |  */
  39 | async function fitViewportToContent(page: Page) {
  40 |     const viewport = page.viewportSize()
  41 |     if (!viewport) {
  42 |         throw new Error('Viewport is not set')
  43 |     }
  44 |     const offscreen = await page.evaluate(() => {
  45 |         const screenContent = document.querySelector('.screen-component-content')
  46 |         const screenOffscreen =
  47 |             screenContent && window.getComputedStyle(screenContent).overflowY !== 'hidden'
  48 |                 ? screenContent.getBoundingClientRect().top + screenContent.scrollHeight - document.body.clientHeight
  49 |                 : 0
  50 | 
  51 |         const root = document.querySelector('#storybook-root')
  52 |         const rootOffscreen = root
  53 |             ? root.getBoundingClientRect().top +
  54 |               root.scrollHeight +
  55 |               parseFloat(window.getComputedStyle(root.parentElement ?? root).paddingBottom || '0') -
  56 |               window.innerHeight
  57 |             : 0
  58 | 
  59 |         return Math.max(screenOffscreen, rootOffscreen, 0)
  60 |     })
  61 |     if (offscreen > 0) {
  62 |         await page.setViewportSize({ width: viewport.width, height: Math.ceil(viewport.height + offscreen) })
  63 |         await waitForStoryFinished(page)
  64 |     }
  65 | }
  66 | 
```