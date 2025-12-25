# ADR-001: TypeScript Strategy for Monorepo Architecture

**Status:** Accepted  
**Date:** 2026-12-25  
**Decision Makers:** Architecture Team  
**Context:** NestJS Monorepo (apps + libs)

## 1. Context

The project uses a NestJS monorepo structure with multiple applications and shared libraries under `/apps` and `/libs`. A consistent and maintainable TypeScript configuration is required to:

- ensure compatibility across applications
- support decorators and metadata used by NestJS
- allow shared code reuse
- support incremental compilation and type-safety
- enable documentation generation using TypeDoc

Previously, separate `tsconfig.json` files with inconsistent options caused build issues, circular dependencies, and runtime module-resolution problems.

## 2. Decision

We standardize on a **single root TypeScript configuration**, extended where necessary by local configs.

Key parameters:

```jsonc
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "ES2023",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "strictNullChecks": true,
    "skipLibCheck": true,
    "declaration": true,
    "sourceMap": true,
    "baseUrl": "./",
    "outDir": "./dist",
    "resolvePackageJsonExports": true,
  },
  "include": ["apps/**/*", "libs/**/*"],
}
```
