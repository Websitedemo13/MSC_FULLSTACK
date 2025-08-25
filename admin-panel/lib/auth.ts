import { User, Role } from '@/types'
import { apiClient } from './api'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

class AuthManager {
  private state: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  }

  private listeners: ((state: AuthState) => void)[] = []

  constructor() {
    this.initAuth()
  }

  private async initAuth() {
    const token = localStorage.getItem('admin_token')
    if (token) {
      try {
        // Try to get stored user data for mock auth
        const storedUser = localStorage.getItem('admin_user')
        if (storedUser) {
          const user = JSON.parse(storedUser)
          this.setState({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          })
        } else {
          // Fallback to API call if available
          const response = await apiClient.getProfile()
          this.setState({
            user: response.data,
            token,
            isAuthenticated: true,
            isLoading: false,
          })
        }
      } catch (error) {
        this.logout()
      }
    } else {
      this.setState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      })
    }
  }

  private setState(newState: Partial<AuthState>) {
    this.state = { ...this.state, ...newState }
    this.listeners.forEach(listener => listener(this.state))
  }

  public subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  public getState() {
    return this.state
  }

  public async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      this.setState({ isLoading: true })

      // Demo accounts for testing
      const demoAccounts = [
        {
          email: 'admin@msc.edu.vn',
          password: 'admin123',
          user: {
            id: '1',
            email: 'admin@msc.edu.vn',
            name: 'MSC Admin',
            roles: [{ id: '1', name: 'admin', permissions: [] }],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        },
        {
          email: 'editor@msc.edu.vn',
          password: 'editor123',
          user: {
            id: '2',
            email: 'editor@msc.edu.vn',
            name: 'MSC Editor',
            roles: [{ id: '2', name: 'editor', permissions: [] }],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        },
        {
          email: 'demo@msc.edu.vn',
          password: 'demo123',
          user: {
            id: '3',
            email: 'demo@msc.edu.vn',
            name: 'Demo User',
            roles: [{ id: '3', name: 'partner', permissions: [] }],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        }
      ]

      // Find matching demo account
      const account = demoAccounts.find(acc => acc.email === email && acc.password === password)

      if (!account) {
        this.setState({ isLoading: false })
        return {
          success: false,
          error: 'Email hoặc mật khẩu không đúng. Thử: admin@msc.edu.vn / admin123'
        }
      }

      // Generate mock token
      const token = `mock-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      localStorage.setItem('admin_token', token)
      localStorage.setItem('admin_user', JSON.stringify(account.user))

      this.setState({
        user: account.user,
        token,
        isAuthenticated: true,
        isLoading: false,
      })

      return { success: true }
    } catch (error: any) {
      this.setState({ isLoading: false })
      return {
        success: false,
        error: 'Có lỗi xảy ra khi đăng nhập'
      }
    }
  }

  public logout() {
    localStorage.removeItem('admin_token')
    this.setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    })
  }

  public hasRole(roleName: string): boolean {
    if (!this.state.user || !this.state.user.roles) return false
    return this.state.user.roles.some(role => role.name === roleName)
  }

  public hasAnyRole(roleNames: string[]): boolean {
    if (!this.state.user || !this.state.user.roles) return false
    return this.state.user.roles.some(role => roleNames.includes(role.name))
  }

  public canManageContent(): boolean {
    return this.hasAnyRole(['admin', 'editor'])
  }

  public canManageUsers(): boolean {
    return this.hasRole('admin')
  }

  public canApproveContent(): boolean {
    return this.hasAnyRole(['admin', 'editor'])
  }

  public isPartner(): boolean {
    return this.hasRole('partner')
  }

  public canEditContent(authorId: string): boolean {
    if (this.hasAnyRole(['admin', 'editor'])) {
      return true
    }
    
    if (this.hasRole('partner') && this.state.user?.id === authorId) {
      return true
    }
    
    return false
  }
}

export const authManager = new AuthManager()

// React hook for using auth state
export function useAuth() {
  const [state, setState] = React.useState(authManager.getState())

  React.useEffect(() => {
    return authManager.subscribe(setState)
  }, [])

  return {
    ...state,
    login: authManager.login.bind(authManager),
    logout: authManager.logout.bind(authManager),
    hasRole: authManager.hasRole.bind(authManager),
    hasAnyRole: authManager.hasAnyRole.bind(authManager),
    canManageContent: authManager.canManageContent.bind(authManager),
    canManageUsers: authManager.canManageUsers.bind(authManager),
    canApproveContent: authManager.canApproveContent.bind(authManager),
    isPartner: authManager.isPartner.bind(authManager),
    canEditContent: authManager.canEditContent.bind(authManager),
  }
}

// Note: React import will be added by Next.js automatically, but we need to import it explicitly for this file
import React from 'react'
