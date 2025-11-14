# 🚀 Guide de Démarrage Rapide

## Installation en 3 étapes

### 1️⃣ Installer les dépendances
```bash
cd mon_portfolio
npm install
```

### 2️⃣ Lancer le serveur de développement
```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur
```
http://localhost:5173
```

---

## 📝 Personnalisation Rapide

### Modifier vos informations personnelles
**Fichier** : `src/data.js`

```javascript
export const personal = {
  name: 'Votre Nom',              // Changez ici
  role: 'Votre Titre',            // Changez ici
  email: 'votre@email.com',       // Changez ici
  phone: '+221 XX XXX XX XX',     // Changez ici
  github: 'https://github.com/vous',    // Ajoutez votre lien
  linkedin: 'https://linkedin.com/in/vous', // Ajoutez votre lien
  bio: 'Votre description...'     // Changez ici
}
```

### Modifier vos compétences
**Fichier** : `src/data.js`

```javascript
export const skills = [
  {
    category: 'Votre Catégorie',
    items: ['Compétence 1', 'Compétence 2', ...]
  },
  // Ajoutez plus de catégories
]
```

### Ajouter vos projets
**Fichier** : `src/data.js`

```javascript
export const projects = [
  {
    id: 1,
    title: 'Titre du Projet',
    description: 'Description...',
    tech: ['React', 'Tailwind', ...],
    type: 'Type de projet'
  },
  // Ajoutez plus de projets
]
```

---

## 🎨 Personnaliser les Couleurs

**Fichier** : `tailwind.config.cjs`

```javascript
colors: {
  primary: {
    500: '#3b82f6',  // Couleur principale - Changez ici
    600: '#2563eb',
  },
  accent: {
    purple: '#8b5cf6',  // Changez ici
    pink: '#ec4899',    // Changez ici
  }
}
```

---

## 🖼️ Remplacer l'Avatar

1. Créez votre propre image/SVG
2. Remplacez le fichier : `src/assets/avatar.svg`
3. Ou importez une nouvelle image dans `Hero.jsx`

---

## 📧 Activer le Formulaire de Contact

### Option 1 : EmailJS (Recommandé)

1. **Créer un compte** : [emailjs.com](https://www.emailjs.com/)

2. **Installer EmailJS**
```bash
npm install @emailjs/browser
```

3. **Configurer** dans `Contact.jsx`
```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
}
```

### Option 2 : Formspree (Plus simple)

1. **Créer un compte** : [formspree.io](https://formspree.io/)
2. **Modifier le form** dans `Contact.jsx`
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🌐 Déploiement

### Netlify (Recommandé)

1. **Build le projet**
```bash
npm run build
```

2. **Déployer sur Netlify**
   - Aller sur [netlify.com](https://www.netlify.com/)
   - Drag & drop le dossier `dist/`
   - ✅ Site en ligne !

### Vercel

```bash
npm install -g vercel
vercel deploy
```

### GitHub Pages

1. **Modifier** `vite.config.js`
```javascript
export default defineConfig({
  base: '/nom-repo/',
  plugins: [react()],
})
```

2. **Build et déployer**
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

---

## 🎯 Checklist Avant Déploiement

- [ ] ✅ Informations personnelles à jour (`data.js`)
- [ ] ✅ Email et téléphone corrects
- [ ] ✅ Liens GitHub et LinkedIn ajoutés
- [ ] ✅ Avatar personnalisé
- [ ] ✅ Projets avec vraies descriptions
- [ ] ✅ Titre et meta description SEO (`index.html`)
- [ ] ✅ Favicon personnalisé
- [ ] ✅ Formulaire de contact configuré
- [ ] ✅ Test responsive sur mobile
- [ ] ✅ Vérification des liens
- [ ] ✅ Build sans erreur (`npm run build`)

---

## 🐛 Problèmes Courants

### Le serveur ne démarre pas
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les animations ne fonctionnent pas
Vérifier que Framer Motion est installé :
```bash
npm install framer-motion
```

### Erreur de build
```bash
npm run build -- --force
```

### Port déjà utilisé
Le serveur choisit automatiquement un autre port (5174, 5175, etc.)

---

## 📚 Ressources Utiles

- **Documentation React** : [react.dev](https://react.dev)
- **Documentation Tailwind** : [tailwindcss.com](https://tailwindcss.com)
- **Documentation Framer Motion** : [framer.com/motion](https://www.framer.com/motion/)
- **Icônes React** : [react-icons.github.io](https://react-icons.github.io)
- **Gradients CSS** : [cssgradient.io](https://cssgradient.io)
- **Couleurs** : [coolors.co](https://coolors.co)

---

## 💡 Astuces

### Modifier les animations
Les animations sont dans `tailwind.config.cjs` :
```javascript
animation: {
  'custom': 'customAnim 2s ease-in-out infinite'
}
```

### Ajouter une nouvelle section
1. Créer le composant dans `src/components/`
2. Importer dans `App.jsx`
3. Ajouter dans le render
4. Mettre à jour le menu dans `Navbar.jsx`

### Tester le build en local
```bash
npm run build
npm run preview
```

---

## 🆘 Besoin d'Aide ?

### Erreurs courantes
- Lire les messages d'erreur dans la console
- Vérifier que tous les imports sont corrects
- S'assurer que les dépendances sont installées

### Documentation complète
Voir `DOCUMENTATION.md` pour le guide complet

### Changelog
Voir `CHANGELOG.md` pour la liste de toutes les modifications

---

## 🎉 C'est Parti !

Votre portfolio est prêt à impressionner les recruteurs et clients ! 

**Commandes essentielles** :
```bash
npm install      # Installation
npm run dev      # Développement
npm run build    # Production
```

**Bon développement ! 🚀**
