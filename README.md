# Introduction to JavaScript and DOM Manipulation

This module is part of the internal Bootstrap framework JavaScript utilities responsible for managing component instances bound to DOM elements. It ensures a one-to-one association between DOM elements and Bootstrap component instances (such as modals, tooltips, etc.) to maintain proper initialization, avoid conflicts, and enable clean disposal.

## Features

- Manages Bootstrap component instances via a `Map` between elements and keys.
- Ensures only one instance per element per key is active, preventing duplicate bindings.
- Provides methods to set, get, and remove component instances associated with DOM elements.
- Automatically cleans up references to avoid memory leaks.

### `set(element, key, instance)`

Associates a Bootstrap component instance with a DOM element under a specific key.

- **Parameters**:
  - `element` - The DOM element to associate with.
  - `key` - A unique key identifying the component type.
  - `instance` - The component instance to store.

- **Behavior**:
  - If an instance already exists for the element under a different key, logs an error and ignores the new instance.
  - Otherwise, stores the instance for future retrieval.

### `get(element, key)`

Retrieves the stored instance of a Bootstrap component bound to a specific element and key.

- **Parameters**:
  - `element` - The DOM element.
  - `key` - The key identifying the component type.

- **Returns**:
  - The component instance if found, or `null` otherwise.

### `remove(element, key)`

Removes the stored component instance associated with the element and key.

- **Parameters**:
  - `element` - The DOM element.
  - `key` - The key identifying the component type.

- Cleans up the element map entry if no instances remain for that element.

## Usage

This utility is used internally by Bootstrap components and is **not intended for direct use** in application code. When you initialize Bootstrap components via their public API or data attributes, instance management is handled automatically by this module.


#### Technologies Used

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white)

##### Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PLP-WebTechnologies feb-2025-introduction-to-javascript-and-dom-manipulation-KiptooRugut.git
   cd feb-2025-introduction-to-javascript-and-dom-manipulation