# CoverShop

An e-commerce website that sells customised phone covers.

## Tech Stack

### Frontend

- Nextjs
- TailwindCSS
- Shadcn
- `react-Dropzone` - lib for simple drag & drop zone for files
- `react-rnd` - lib for draggable and resizable components [heavily client-side]
- `headlessui/react` - lib for better radio buttons (better than the ones Shadcn has to offer; creators of both libs are same)
- `react-dom-confetti`

### Backend

- [UploadThing](uploadthing.com) - Used instead of S3; only for testing purposes
- Zod - Schema Validation library (allows us to pass runtime objects & parse it to make sure the type is what we expect)
