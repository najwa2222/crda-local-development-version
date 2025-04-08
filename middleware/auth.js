const roles = {
    directeur: ['/admin', '/reports', '/getservices', '/results'],
    gerant: ['/reports', '/services'],
    chef_dentreprise: ['/services', '/getservices'],
  };
  
  exports.checkRole = (requiredRole) => {
    return (req, res, next) => {
      if (!req.session.user || req.session.user.role_user !== requiredRole) {
        return res.redirect('/login?error=unauthorized');
      }
      next();
    };
  };
  
  exports.checkApproved = (req, res, next) => {
    if (req.session.user?.status_user !== 'approved') {
      return res.redirect('/login?error=not_approved');
    }
    next();
  };