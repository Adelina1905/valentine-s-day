# 🍓 Valentine Button Chase (Yes/No Game)

A cute (and slightly evil 😈) Valentine’s Day mini-game: you ask **“Would you be my Valentine?”** and the **No** button runs away.  
After a few dodges, the game shows funny reaction images (cats/mushroom), and if the player keeps trying to say “No”… it ends with a **fake 404 error page**.  
If they click **Yes**, you get a sweet kitty moment + a short “kissing” animation sequence.

---

## ✨ Features

- **Runaway “No” button** that teleports to random positions inside the container
- **Milestone reactions** at specific attempt counts:
  - attempt 5 → `huh.png`
  - attempt 8 → `kitty.png`
  - attempt 10 → `mushroom.png`
  - attempt 12 → `nooo.png` + triggers fake 404 after 2 seconds
- **Freeze mechanic**: when a cat image appears, the No button stops moving until the user clicks outside (hides the image)
- **Yes ending**: hides UI, shows `shyKitty.png`, then plays 3 kissing frames (`kissing0.png`, `kissing1.png`, `kissing2.png`)
- **Custom fonts** via `@font-face` (`Last-Christmas`, `Vogue`)
- **Full-screen 404 overlay** (`404.png`)

