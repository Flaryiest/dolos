# API Services Documentation

This directory contains centralized API services that handle all communication with the backend. All API calls use the `baseUrl` from the utils folder and follow a consistent pattern.

## Architecture

### Service Structure
```
src/services/
├── api.ts           # Main API service with all endpoints
└── index.ts         # Service exports

src/types/
├── auth.ts          # Authentication types
├── api.ts           # API request/response types
├── components.ts    # Component prop types
└── index.ts         # Type exports

src/utils/
└── baseUrl.tsx      # Centralized base URL configuration
```

## Features

### 🔧 Centralized API Management
- **Single Source**: All API endpoints in one place
- **Consistent Interface**: Uniform request/response handling
- **Type Safety**: Full TypeScript support for all API calls
- **Error Handling**: Standardized error responses

### 🎯 Base URL Management
- **Environment Aware**: Uses `VITE_API_URL` environment variable
- **Fallback Support**: Defaults to localhost for development
- **Single Import**: Imported from `utils/baseUrl.tsx`

### 📝 Type System
- **Separated Types**: Types organized by domain (auth, api, components)
- **Request/Response Types**: Full typing for all API interactions
- **Component Props**: Typed interfaces for component props

## Usage Examples

### Basic API Calls
```tsx
import { api } from '../services';

// Authentication
const result = await api.auth.verifyToken();
const logoutResult = await api.auth.logout();

// Projects
const projects = await api.projects.getProjects();
const newProject = await api.projects.createProject({
    title: 'My Project',
    description: 'Project description'
});
```

### Using Types
```tsx
import type { User, CreateProjectRequest, ApiTestResult } from '../types';

const [user, setUser] = useState<User | null>(null);
const [results, setResults] = useState<{[key: string]: ApiTestResult}>({});

const projectData: CreateProjectRequest = {
    title: 'New Project',
    description: 'This is a new project'
};
```

### Component Props
```tsx
import type { SidebarProps } from '../types';

function Sidebar({ isOpen, onClose, onLogout, user }: SidebarProps) {
    // Component implementation
}
```

## API Service Structure

### Generic API Function
```typescript
async function apiCall<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<{ success: boolean; data?: T; error?: string; status: number }>
```

### Response Format
All API calls return a consistent response format:
```typescript
{
    success: boolean;     // Whether the request was successful
    data?: T;            // Response data (if successful)
    error?: string;      // Error message (if failed)
    status: number;      // HTTP status code
}
```

## Available APIs

### Authentication API (`api.auth`)
- `verifyToken()` - Verify authentication token
- `logout()` - Logout current user

### Projects API (`api.projects`)
- `getProjects()` - Get all user projects
- `createProject(data)` - Create a new project
- `getProject(id)` - Get specific project
- `addTextContext(id, data)` - Add text context to project
- `chatWithProject(id, data)` - Chat with project
- `updateProject(id, data)` - Update project details
- `deleteProject(id)` - Delete project

## Type Definitions

### Authentication Types
```typescript
interface User {
    id: number;
    email: string;
    access: string;
    usage: number;
    limit: number;
}

interface VerifyTokenResponse {
    valid: boolean;
    user?: User;
}
```

### Project Types
```typescript
interface Project {
    id: string;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    user_id: number;
}

interface CreateProjectRequest {
    title: string;
    description: string;
}
```

### API Result Types
```typescript
interface ApiTestResult {
    status: number;
    data: any;
    success: boolean;
}
```

## Configuration

### Environment Variables
```env
VITE_API_URL=https://backend.mythea.io  # Production API URL
# Defaults to http://localhost:5000 for development
```

### Base URL Usage
```typescript
// In utils/baseUrl.tsx
export const baseUrl = "https://backend.mythea.io";

// In API service
import { baseUrl } from '../utils/baseUrl';
const response = await fetch(`${baseUrl}/endpoint`);
```

## Migration Benefits

### Before Refactoring
- ❌ Hardcoded URLs in multiple files
- ❌ Inconsistent error handling
- ❌ Repeated fetch configurations
- ❌ Types scattered across files
- ❌ No centralized API management

### After Refactoring
- ✅ Single source for all API calls
- ✅ Consistent error handling
- ✅ Centralized base URL management
- ✅ Organized type system
- ✅ Reusable API functions
- ✅ Better maintainability

## Best Practices

### 1. Use the API Service
```tsx
// ✅ Good - Use centralized API
const result = await api.projects.getProjects();

// ❌ Bad - Direct fetch calls
const response = await fetch(`${baseUrl}/get_projects`);
```

### 2. Import Types from Types Folder
```tsx
// ✅ Good - Import from types
import type { User, ApiTestResult } from '../types';

// ❌ Bad - Inline type definitions
interface User { id: number; email: string; }
```

### 3. Handle API Responses
```tsx
// ✅ Good - Check success status
const result = await api.projects.createProject(data);
if (result.success) {
    console.log('Project created:', result.data);
} else {
    console.error('Error:', result.error);
}

// ❌ Bad - Assume success
const result = await api.projects.createProject(data);
console.log(result.data.project); // Might crash if failed
```

### 4. Use TypeScript
```tsx
// ✅ Good - Proper typing
const [results, setResults] = useState<{[key: string]: ApiTestResult}>({});

// ❌ Bad - Any type
const [results, setResults] = useState<any>({});
```

## Testing

The API service includes comprehensive testing in the dashboard:
- Tests all CRUD operations
- Validates response formats
- Checks error handling
- Verifies type safety

## Future Enhancements

Planned improvements:
- **Caching**: Add response caching for frequently accessed data
- **Retry Logic**: Automatic retry for failed requests
- **Loading States**: Built-in loading state management
- **Optimistic Updates**: Client-side updates before server confirmation
