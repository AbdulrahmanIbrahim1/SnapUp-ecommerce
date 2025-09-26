import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // تحديث الحالة حتى يتم عرض واجهة مستخدم احتياطية
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // يمكن تسجيل الخطأ هنا أو إرساله إلى خدمة تتبع الأخطاء
    console.error("Caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // يمكن عرض واجهة مستخدم احتياطية هنا
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
