
using DiscoverSlopes.Models.Entities;
using AutoMapper;
using DiscoverSlopes.ViewModels;

namespace DiscoverSlopesWebApiAuth.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, DiscoverSlopes.Models.ApplicationUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}
