# Tailwind CSS Kurulumu

Bu proje için Tailwind CSS'i kurmak ve yapılandırmak için aşağıdaki adımları izleyebilirsiniz.

## 1. Tailwind'i Projeye Ekleme

Tailwind CSS'i projenize eklemek için npm kullanarak kurulum yapın.

### Adım 1: Node.js ve npm kurulu olduğundan emin olun

Eğer Node.js ve npm bilgisayarınızda yüklü değilse, [Node.js resmi sitesinden](https://nodejs.org) yükleyebilirsiniz.

### Adım 2: Projeye Tailwind CSS'i ekleyin

Projede Tailwind CSS'i kullanmak için aşağıdaki komutla Tailwind'i yükleyin:

```bash
npm install -D tailwindcss

Ardından Tailwind CSS konfigürasyon dosyasını oluşturun:

npx tailwindcss init

### Adım 3: Tailwind'i CSS Dosyanıza Ekleyin
Aşağıdaki Tailwind direktiflerini CSS dosyanıza ekleyin. Örneğin, src/input.css adında bir dosya oluşturun ve şunları ekleyin:

@tailwind base;
@tailwind components;
@tailwind utilities;

### Adım 4: Tailwind'i Derleyin
Tailwind'i CSS'e derlemek için şu komutu kullanarak derleme işlemini başlatın:

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

Bu komut, src/input.css dosyasındaki Tailwind kodlarını alır ve dist/output.css dosyasına derler. Ayrıca --watch modunda çalışır, yani dosyaları izleyerek her değişiklikte yeniden derler.

### Adım 5: HTML Dosyanıza Tailwind'i Dahil Edin

Oluşan output.css dosyasını HTML dosyanıza şu şekilde dahil edebilirsiniz:

<link href="/dist/output.css" rel="stylesheet">

### Ek Bilgiler
Tailwind CSS Dokümantasyonu ile daha fazla bilgi alabilirsiniz.


