using Aplication.Activities.DTOs;
using AutoMapper;
using Domain;

namespace Aplication.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<CreateActivityDto, Activity>();
        
    }
}