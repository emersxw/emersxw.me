---
title: "Scoresnap: The market for sports scoring apps is surprisingly disappointing, i built my own"
description: "Discover the journey of creating Snapscore, an ad-free, cost-effective volleyball practice score tracker app."
date: "11/17/2024"
draft: false
---

As a casual volleyball player and software engineer, I've always found score tracking during practice sessions to be unnecessarily complicated. Despite searching through numerous apps, each one presented its own set of challenges—whether it was disruptive advertisements interrupting gameplay, expensive subscription models blocking basic features, or clunky interfaces that slowed down the game. This frustration led me to an exciting opportunity: creating my own solution that would perfectly align with the needs of volleyball players and coaches.

## The Problem with Existing Apps

The market for sports scoring apps is surprisingly disappointing. Most available options follow a familiar pattern: they start free but quickly reveal their limitations. Users are forced to either endure constant advertisement interruptions or subscribe to premium plans just to access essential features. Beyond these monetary obstacles, many apps lack crucial functionalities that volleyball teams need, such as quick score adjustments, undo options, and customizable winning scores. The experience felt like trying to fit a square peg into a round hole—these apps weren't designed with volleyball players in mind.

## Why Build My Own App?

With over three years of experience as a full-stack software engineer, I saw this challenge as an opportunity to combine my technical expertise with my passion for volleyball. While I had been working with React Native professionally for more than a year, my experience was primarily focused on integrating mobile components with backend services. I had yet to explore the full potential of React Native or navigate the complexities of publishing apps on major platforms. This project offered multiple exciting opportunities:

1. Solve a real problem I faced daily during volleyball practice
2. Gain comprehensive experience in mobile app development, from design to deployment
3. Learn the intricacies of the app publishing process on both iOS and Android platforms
4. Create features specifically tailored to volleyball teams' needs
5. Build something that could benefit the broader volleyball community

## The Journey

### Defining Features

Through conversations with teammates and coaches, I identified key features that would make the perfect volleyball score tracker:

- Simple, intuitive score tracking with large, easy-to-tap buttons
- Customizable winning scores to accommodate different practice formats
- Quick score adjustment with an undo feature for accidental taps
- Score reset confirmation to prevent accidental data loss
- Celebratory animations for winning moments to add excitement
- Clean, ad-free interface that doesn't interrupt the flow of practice
- Support for multiple teams and practice sessions
- Offline functionality for gyms with poor connectivity

### Screenshots

<div class="screenshot-container">

![Homepage](./assets/home.png)
*The main screen embodies minimalist design principles with two prominent score displays. Large, touch-friendly scoring buttons make it easy to update scores even in intense gameplay moments. The reset and undo controls are strategically placed to prevent accidental activation while remaining easily accessible.*

![Reset Score](./assets/reset-score.png)
*The reset confirmation modal adds a crucial safety layer to prevent accidental score resets. The clear, concise messaging and prominent cancel option ensure users maintain control over their scoring data while keeping the interaction quick and straightforward.*

![Team Win Screen 1](./assets/team-win-1.png)
*Victory moments come alive with dynamic animations and confetti effects. Team 1's win screen features distinct team colors and prominently displays the final score, creating a satisfying conclusion to each game while maintaining score visibility.*

![Team Win Screen 2](./assets/team-win-2.png)
*The alternate victory screen for Team 2 maintains consistent celebration elements while using team-specific colors. The intuitive "New Game" option allows for quick transitions between matches, perfect for practice sessions with multiple games.*

![Winning Score](./assets/winning-score.png)
*The winning score configuration screen offers flexibility for different game formats. Users can quickly select common point targets or set custom values, accommodating everything from quick practice games to full-length matches.*

</div>

### Leveraging React Native

Choosing React Native as the development framework was strategic. Its cross-platform capabilities meant I could maintain a single codebase while deploying to both iOS and Android, significantly reducing development time and maintenance overhead. The framework's rich ecosystem provided essential tools for implementing features like animations, state management, and offline storage, allowing me to focus on creating a polished user experience rather than reinventing technical solutions.

### Diving Deeper into React Native

The development process pushed me to explore advanced aspects of React Native that I hadn't encountered in my day job. I delved into performance optimization techniques, mastered complex animations for the victory screens, and implemented efficient offline storage solutions. Working with device-specific features and ensuring consistent behavior across different screen sizes presented exciting challenges that enhanced my mobile development expertise.

### Understanding the App Stores

While the app is currently in beta and used internally by our team (not yet published on public app stores), the publishing process has still been an educational journey. Both the App Store TestFlight and Google Play Internal Testing have unique requirements and guidelines that developers must navigate. From setting up developer accounts to handling app signing and versioning, each step provided valuable insights into the mobile app ecosystem. The experience of preparing testing builds, managing internal distribution, and understanding the review process requirements has given me a solid foundation for when we decide to publish the app publicly. For now, keeping the app in beta allows us to focus on perfecting the experience based on direct feedback from our volleyball team.

## What I Learned

1. **User-Centered Design**: The importance of continuous user feedback cannot be overstated. Regular testing with my volleyball team helped shape features and improve usability in ways I hadn't initially considered.

2. **Mobile Development Best Practices**: Beyond basic implementation, I learned crucial lessons about:
   - Performance optimization for smooth animations
   - State management for reliable score tracking
   - Offline data persistence
   - Cross-device compatibility
   - Battery efficiency considerations

3. **Publishing Process**: The journey from development to distribution taught me about:
   - App store optimization (ASO)
   - Version management and release strategies
   - Platform-specific requirements and guidelines
   - User privacy considerations and compliance


## Conclusion

This project represents more than just a technical achievement—it's a testament to the power of solving real-world problems through software development. The journey from initial frustration to creating a solution has been incredibly rewarding, both professionally and personally. For developers considering similar projects, I encourage you to look for problems in your own experiences—they often lead to the most meaningful solutions.

If you're interested in trying Snapscore or would like to share your thoughts on similar projects, I'd love to hear from you. The app is available on both the App Store and Google Play Store, and I'm always open to feedback and suggestions for improvement.

