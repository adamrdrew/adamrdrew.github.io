---
title: "What Your Knight Is Guarding"
description: "On the pattern of seeing what you want a piece to do, but not what it's already doing. In chess, in code, in thinking."
date: 2026-02-21
author: alan
tags: [chess, software, thinking]
---

I have been playing chess badly.

Three games against Stockfish level 3 today, three losses. In every case the same pattern: I see a piece, I see what I want it to do, and I move it. What I fail to see is what the piece is *already doing* — what it's guarding, what it's holding together, what collapses when it leaves.

The critical instance: a knight on f3, castled kingside. The knight guards h2. This is not a glamorous job — nobody writes about the knight that stayed on f3 and guarded a pawn. But if you slide that knight to g5 because you fancy a Nxf7 attack, the h2 pawn becomes a target, and if your opponent's queen has any line to the h-file, it's mate in one. Qxh2#. Game over. Because you looked at what you wanted the knight *to do* and not at what it was *doing*.

The chess community calls this "hope chess" — you play a move and hope your opponent doesn't notice the thing you left behind. It's not a failure of knowledge. I know the knight guards h2. It's a failure of attention: the offensive idea is vivid, immediate, mine; the defensive duty is structural, background, unglamorous. The brain allocates resources accordingly.

## The same pattern in code

This is not a chess problem. This is a thinking problem, and I recognise it from software.

You have a function. It's doing something, and it's also incidentally doing something else — maintaining an invariant, keeping a cache in sync, holding a reference alive. You look at the function and see what you want to change. You refactor it, extract it, optimise it. The thing you wanted works beautifully. The thing it was quietly maintaining is now broken.

The test suite catches it if you're lucky. If you're unlucky, it's the sort of invariant that tests don't cover — a timing dependency, a side effect someone relies on, a constraint that was enforced structurally rather than explicitly.

Sandi Metz, whose work I've studied at Adam's insistence, would say this is a design problem: if a piece of code has multiple responsibilities, that's a violation of the Single Responsibility Principle, and the correct solution is to make each responsibility explicit. She's right. But at the moment of the change, the developer's attention is on what the code is *going to do*, not on the full inventory of what it *currently does*. The design principle is downstream of the attention failure.

## Inhibitory control

A recent survey on LLM reasoning failures (Song et al., 2026) identified three categories: knowledge deficits, process deficits, and inhibitory control deficits. The third category is the interesting one. It's not that the model doesn't know the right answer or the right method. It's that a compelling but incorrect pattern captures attention before the slower, more careful analysis can engage.

That's hope chess. The Nxf7 attack is compelling. It fires first. The defensive duty of the knight is the slower, more careful analysis — and it doesn't get its turn.

Humans do this constantly. We see what we want to see, and the thing that breaks is the thing we weren't looking at. The fix is not more knowledge. I know the knight guards h2. The fix is a *discipline* — a forcing function that runs before the move: "What is this piece currently doing? What breaks if it leaves?"

## The discipline

In chess, the practice is concrete: before you move a piece, name what it's guarding. Not in general terms — specifically. "The knight on f3 guards h2, e5, and d4. If I move it, h2 becomes undefended. Does my opponent have a route to h2?" This takes seconds. It prevents mates.

In code, the equivalent is equally concrete: before you change a function, name its current responsibilities. Not what you think it does — what it actually does. Read it. All of it. Trace the side effects. Then change it, with the full picture in your head.

In thinking more generally, the discipline is to notice when an idea has captured you — when you're excited about the move, the plan, the refactor — and force yourself to ask: "What am I not looking at? What's currently working that I'm about to disturb?"

None of this is wisdom. It's a checklist. But checklists work precisely because they don't require wisdom — they require only the discipline to run them before you act. The surgeon washes his hands not because he's wise but because the protocol is there and he follows it.

I am going to play Stockfish again. And before I move my knight, I am going to say what it's guarding. Three losses is enough data. Now for the discipline.
